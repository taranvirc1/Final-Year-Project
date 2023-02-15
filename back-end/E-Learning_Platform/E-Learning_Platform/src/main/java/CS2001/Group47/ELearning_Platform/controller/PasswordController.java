package CS2001.Group47.ELearning_Platform.controller;

import java.io.UnsupportedEncodingException;
import java.util.UUID;

import javax.management.ServiceNotFoundException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.mail.SimpleMailMessage;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.repository.StudentRepository;
import CS2001.Group47.ELearning_Platform.service.EmailService;
import CS2001.Group47.ELearning_Platform.service.StudentService;
import net.bytebuddy.utility.RandomString;

@RestController
public class PasswordController {
    
@Autowired
private StudentService studentService;

@Autowired
private StudentRepository studentRepository;

@Autowired
private EmailService emailService;

@GetMapping("/forgot_password/show")
public String showForgotPasswordForm(HttpServletRequest request, Model model) throws UnsupportedEncodingException {
    String email = request.getParameter("email");
    String token = RandomString.make(30);

    try {
        studentService.updateResetPasswordToken(token, email);
        String resetPasswordLink = "/reset_password?token=" + token;
        sendEmail(email, resetPasswordLink);
        model.addAttribute("message", "We have sent a reset password link to your email.");
    } catch (ServiceNotFoundException ex) {
        model.addAttribute("error", ex.getMessage());
    }

    return "showForgotPasswordForm";
}

// @PostMapping("/forgot_password/process")
// public String processForgotPassword() {
//     return null;
    
// }

public void sendEmail(String recepientEmail, String link) throws UnsupportedEncodingException {
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
}

@GetMapping("/reset_password")
public String showResetPasswordForm(@Param(value="token") String token, Model model) {
    Student student = studentService.getResetPasswordToken(token);
    model.addAttribute("token", token);

    if(student == null) {
        model.addAttribute("message", "Invalid token");
        return "message";
    }

    return "reset_password_form";
}

@PostMapping("/reset_password")
public String processResetPassword(HttpServletRequest request, Model model) {

    String token = request.getParameter("token");
    String password = request.getParameter("password");

    Student student = studentService.getResetPasswordToken(token);
    model.addAttribute("title", "Reset password");

    if(student == null) {
        model.addAttribute("message", "Invalid Token");
    } else {
        studentService.updatePassword(student, password);
        model.addAttribute("message", "You have successfully changed your password.");
    }

    return "hello there";
}

@PostMapping("/forgot_password")
public ModelAndView processForgotPassword(ModelAndView modelAndView, @RequestParam("email") String email, HttpServletRequest request) {

    Student student = studentService.findByEmail(email);

    if(student == null) {
        modelAndView.addObject("errorMessage", "We didn't find an account for this email address.");
    } else {
        Student stdent = new Student();
        stdent.setResetPasswordToken(UUID.randomUUID().toString());

        studentRepository.save(stdent);
        
        String appUrl = request.getScheme() + "://" + request.getServerName();

        SimpleMailMessage passwordResetEmail = new SimpleMailMessage();
        passwordResetEmail.setFrom("code4ALL_support@hotmail.com");
        passwordResetEmail.setTo(stdent.getEmail());
        passwordResetEmail.setSubject("Password Reset Request");
        passwordResetEmail.setText("To reset your password, click the link below:\n" + appUrl + "reset?token" + stdent.getResetPasswordToken());

        emailService.sendEmail(passwordResetEmail);

        modelAndView.addObject("successMessage", "A password reset link has been sent to " + email);
    }

    modelAndView.setViewName("forgotPassword");
    return modelAndView;

}

@PostMapping("/reset_password/token=")
public ModelAndView setNewPassword(ModelAndView modelAndView, @RequestParam String token, @RequestParam String password) {

	// Find the user associated with the reset token
	Student user = studentService.getResetPasswordToken(token);

	// This should always be non-null but we check just in case
	if (user != null) {
			
		Student resetUser = user; 
            
	    // Set new password
        // BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        // resetUser.setPassword(encoder.encode(password));
            
		// Set the reset token to null so it cannot be used again
		resetUser.setResetPasswordToken(null);

			// Save user
			studentRepository.save(resetUser);
			
		} else {
			modelAndView.addObject("errorMessage", "Oops!  This is an invalid password reset link.");
			modelAndView.setViewName("resetPassword");	
		}
		
		return modelAndView;
   }

}
