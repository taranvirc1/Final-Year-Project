package CS2001.Group47.ELearning_Platform.controller;

import java.io.UnsupportedEncodingException;

import javax.management.ServiceNotFoundException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.service.StudentService;
import net.bytebuddy.utility.RandomString;

@RestController
public class PasswordController {
    
@Autowired
private StudentService studentService;

@GetMapping("/forgot_password")
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

@PostMapping("/forgot_password")
public String processForgotPassword() {
    return null;
    
}

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

}
