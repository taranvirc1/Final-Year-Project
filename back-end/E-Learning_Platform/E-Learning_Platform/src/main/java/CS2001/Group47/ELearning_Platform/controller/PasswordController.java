package CS2001.Group47.ELearning_Platform.controller;

import java.io.UnsupportedEncodingException;

import javax.management.ServiceNotFoundException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.service.StudentService;
import net.bytebuddy.utility.RandomString;

@RestController
public class PasswordController {
    
@Autowired
private StudentService studentService;

@GetMapping("/forgot_password")
public String showForgotPasswordForm(HttpServletRequest request, Model model) {
    String email = request.getParameter("email");
    String token = RandomString.make(30);

    try {
        studentService.updateResetPasswordToken(token, email);
        String resetPasswordLink = "/reset+password?token=" + token;
        // sendEmail
    } catch (ServiceNotFoundException ex) {
        model.addAttribute("error", ex.getMessage());
    }

    return "showForgotPasswordForm";
}

@PostMapping("forgot_password")
public String processForgotPassword() {
    return null;
    
}

public void SendEmail() {

}

@GetMapping("/reset_password")
public String showResetPasswordForm() {
    return "hello world";
}

@PostMapping("reset_password")
public String processResetPassword() {
    return "hello there";
}

}
