package CS2001.Group47.ELearning_Platform.dto;

public class ResetPasswordDTO {

    String newPassword;
    String token;
    
    public ResetPasswordDTO(String newPassword, String token) {
        this.newPassword = newPassword;
        this.token = token;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
    
}
