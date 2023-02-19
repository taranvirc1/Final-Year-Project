package CS2001.Group47.ELearning_Platform.controller;

import java.io.UnsupportedEncodingException;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.Utility.Utility;
import CS2001.Group47.ELearning_Platform.dto.ResetPasswordDTO;
import CS2001.Group47.ELearning_Platform.exception.StudentNotFoundException;
import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.service.StudentService;
import net.bytebuddy.utility.RandomString;

@RestController
public class PasswordController {
    
@Autowired
private StudentService studentService;

@Autowired
private JavaMailSender mailSender;

@GetMapping("/forgot_password")
public String showForgotPassword(Model model) {
    model.addAttribute("pageTitle", "Reset Password");
    return "forgotPasswordForm";
}

@PostMapping("/forgot_password")
public ResponseEntity forgotPasswordProcess(HttpServletRequest request, @RequestParam("email") String email) throws UnsupportedEncodingException, MessagingException {
    Student student = studentService.findByEmail(email); 
    String token = RandomString.make(30);

    System.out.println("Email: " + student);
    System.out.println("Token: " + token);

    try {
        studentService.updateResetPasswordToken(token, email);
        String resetPasswordLink = Utility.getSiteURL(request) + "/reset_password?token=" + token;
        System.out.println("reset password link: " + resetPasswordLink);
        sendEmail(email, resetPasswordLink);
    } catch (StudentNotFoundException ex) {
        System.out.println(ex + " no student exists with this email!");
        return new ResponseEntity<>(Optional.ofNullable(email), HttpStatus.BAD_REQUEST);
    } catch (UnsupportedEncodingException | MessagingException e) {
        e.printStackTrace();
        System.out.println(e);
    }

    //Return response entity with new user and CREATED status
    return new ResponseEntity<>(Optional.ofNullable(email), HttpStatus.CREATED);
}

public void sendEmail(String recepientEmail, String link) throws UnsupportedEncodingException, MessagingException {
    
    MimeMessage eMailMessage = mailSender.createMimeMessage();
    MimeMessageHelper emailHelper = new MimeMessageHelper(eMailMessage); 

    emailHelper.setFrom("support@code4ALL.com", "Code4ALL Support");
    emailHelper.setTo(recepientEmail);
    
    String subject = "Here's the  link to reset your password";

    String content = "<p>Hello,</p>"
    + "<p>You have requested to reset your password.</p>"
    + "<p>Click the link below to change your password:</p>"
    + "<p><a href=\"" + link + "\">Change my password</a></p>"
    + "<br>"
    + "<p>Ignore this email if you do remember your password, "
    + "or you have not made the request.</p>";

    System.out.println(subject);
    System.out.println(content);

    emailHelper.setSubject(subject);
    emailHelper.setText(content, true);

    mailSender.send(eMailMessage);

}

@GetMapping("/reset_password")
public String showResetPasswordForm(@Param(value="token") String token, Model model) {
    Student student = studentService.getResetPasswordToken(token);

    if(student == null) {
        model.addAttribute("title", "Reset Password");
        model.addAttribute("message", "Invalid token");
        return "message";
    }

    model.addAttribute("token", token);

    model.addAttribute("pageTitle", "New Password");

    return "reset_password_form";
}

@PostMapping("/reset_password")
public String resetPassword(HttpServletRequest request, @RequestBody ResetPasswordDTO resetDTO) {

    String token = resetDTO.getToken();
    String userPass = resetDTO.getNewPassword();

    Student student = studentService.getResetPasswordToken(token);

    if(student == null) {
        System.out.println("Invalid token");
        System.out.println("your password cannot be reset!");
    } else {
        studentService.updatePassword(student, userPass);
        System.out.println("You have successfully changed your password");
    }

    return "success";
}

// @PostMapping("/forgot_password")
// public ModelAndView processForgotPassword(ModelAndView modelAndView, @RequestParam("email") String email, HttpServletRequest request) {

//     Student student = studentService.findByEmail(email);

//     if(student == null) {
//         modelAndView.addObject("errorMessage", "We didn't find an account for this email address.");
//     } else {
//         Student stdent = new Student();
//         stdent.setResetPasswordToken(UUID.randomUUID().toString());

//         studentRepository.save(stdent);
        
//         String appUrl = request.getScheme() + "://" + request.getServerName();

//         SimpleMailMessage passwordResetEmail = new SimpleMailMessage();
//         passwordResetEmail.setFrom("code4ALL_support@hotmail.com");
//         passwordResetEmail.setTo(stdent.getEmail());
//         passwordResetEmail.setSubject("Password Reset Request");
//         passwordResetEmail.setText("To reset your password, click the link below:\n" + appUrl + "reset?token" + stdent.getResetPasswordToken());

//         emailService.sendEmail(passwordResetEmail);

//         modelAndView.addObject("successMessage", "A password reset link has been sent to " + email);
//     }

//     modelAndView.setViewName("forgotPassword");
//     return modelAndView;

// }

// @PostMapping("/reset_password/token=")
// public ModelAndView setNewPassword(ModelAndView modelAndView, @RequestParam String token, @RequestParam String password) {

// 	// Find the user associated with the reset token
// 	Student user = studentService.getResetPasswordToken(token);

// 	// This should always be non-null but we check just in case
// 	if (user != null) {
			
// 		Student resetUser = user; 
            
// 	    // Set new password
//         BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//         resetUser.setPassword(encoder.encode(password));
            
// 		// Set the reset token to null so it cannot be used again
// 		resetUser.setResetPasswordToken(null);

// 			// Save user
// 			studentRepository.save(resetUser);
			
// 		} else {
// 			modelAndView.addObject("errorMessage", "Oops!  This is an invalid password reset link.");
// 			modelAndView.setViewName("resetPassword");	
// 		}
		
// 		return modelAndView;
//    }

}
