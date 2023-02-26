package CS2001.Group47.ELearning_Platform.controller;

import java.io.UnsupportedEncodingException;
// import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
// import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.data.repository.query.Param;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
// import org.springframework.ui.Model;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// import CS2001.Group47.ELearning_Platform.Utility.Utility;
import CS2001.Group47.ELearning_Platform.dto.ResetPasswordDTO;
// import CS2001.Group47.ELearning_Platform.dto.StudentPostDTO;
// import CS2001.Group47.ELearning_Platform.exception.StudentNotFoundException;
import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.repository.StudentRepository;
import CS2001.Group47.ELearning_Platform.service.StudentService;
import net.bytebuddy.utility.RandomString;

@RestController
public class PasswordController {
    
@Autowired
private StudentService studentService;

@Autowired
private JavaMailSender mailSender;

@Autowired 
private StudentRepository studentRepository;

// @GetMapping("/forgot_password")
// public String showForgotPassword(Model model) {
//     model.addAttribute("pageTitle", "Reset Password");
//     return "forgotPasswordForm";
// }

// @PostMapping("/forgot_password")
// public ResponseEntity forgotPasswordProcess(HttpServletRequest request, @RequestBody StudentPostDTO studentPostDTO) throws UnsupportedEncodingException, MessagingException {
//     Student student = studentService.findByEmail(studentPostDTO.getEmail()); 
//     String token = RandomString.make(30);

//     System.out.println("Email: " + student);
//     System.out.println("Token: " + token);

//     String baseURL = "http://locahost:3000";

//     try {
//         studentService.updateResetPasswordToken(token, student.getEmail());
//         String resetPasswordLink = baseURL + "/reset_password?token=" + token;
//         System.out.println("reset password link: " + resetPasswordLink);
//         sendEmail(student.getEmail(), resetPasswordLink);
//     } catch (StudentNotFoundException ex) {
//         System.out.println(ex + " no student exists with this email!");
//         return new ResponseEntity<>(Optional.ofNullable(student.getEmail()), HttpStatus.BAD_REQUEST);
//     } catch (UnsupportedEncodingException | MessagingException e) {
//         e.printStackTrace();
//         System.out.println(e);
//     }

//     //Return response entity with email accepted
//     return new ResponseEntity<>(Optional.ofNullable(student.getEmail()), HttpStatus.ACCEPTED);
// }

@PostMapping("/forgot_password")
public void forgotPassword(@RequestBody String email) {

    Student student = studentService.findByEmail(email);

    if(student == null) {
        throw new RuntimeException("Student not found with email: " + email);
    }
    else {
        // generate random token of 64 characters
        String reset_token = RandomString.make(64);
        System.out.println(reset_token);
        student.setResetPasswordToken(reset_token);
        studentRepository.save(student);

        String reset_link = "http://localhost:3000/newPassword?token=" + reset_token;

        try {
            sendEmail(student.getEmail(), reset_link);
        } catch (UnsupportedEncodingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (MessagingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

}

public void sendEmail(String recepientEmail, String link) throws UnsupportedEncodingException, MessagingException {
    
    MimeMessage eMailMessage = mailSender.createMimeMessage();
    MimeMessageHelper emailHelper = new MimeMessageHelper(eMailMessage); 

    emailHelper.setFrom("group47Code4All@gmail.com", "Code4ALL Support");
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

// @GetMapping("/reset_password")
// public String showResetPasswordForm(@Param(value="token") String token, Model model) {
//     Student student = studentService.getResetPasswordToken(token);

//     if(student == null) {
//         model.addAttribute("title", "Reset Password");
//         model.addAttribute("message", "Invalid token");
//         return "message";
//     }

//     model.addAttribute("token", token);

//     model.addAttribute("pageTitle", "New Password");

//     return "reset_password_form";
// }

@PostMapping("reset_password")
public void resetPassword(@RequestBody String email, @RequestBody ResetPasswordDTO passwordDTO) {

    Student student = studentService.findByEmail(email);

    if(student == null) {
        throw new RuntimeException("Student not found");
    }

    if(!student.getResetPasswordToken().equals(passwordDTO.getToken())) {
        throw new RuntimeException("Invalid token");
    }

    student.setPassword(passwordDTO.getNewPassword());
    student.setResetPasswordToken(null);
    studentRepository.save(student);

}

// @PostMapping("/reset_password")
// public String resetPassword(HttpServletRequest request, @RequestBody ResetPasswordDTO resetDTO) {

//     String token = resetDTO.getToken();
//     String userPass = resetDTO.getNewPassword();

//     Student student = studentService.getResetPasswordToken(token);

//     if(student == null) {
//         System.out.println("Invalid token");
//         System.out.println("your password cannot be reset!");
//     } else {
//         studentService.updatePassword(student, userPass);
//         System.out.println("You have successfully changed your password");
//     }

//     return "success";
// }

}
