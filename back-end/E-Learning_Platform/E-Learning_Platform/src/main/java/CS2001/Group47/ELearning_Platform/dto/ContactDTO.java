package CS2001.Group47.ELearning_Platform.dto;

public class ContactDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String briefMessage;

    public ContactDTO() {}

    public ContactDTO(String firstName, String lastName, String email, String phone, String briefMessage) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.briefMessage = briefMessage;
    }

    // Getters and setters

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getBriefMessage() {
        return briefMessage;
    }

    public void setBriefMessage(String briefMessage) {
        this.briefMessage = briefMessage;
    }

    @Override
    public String toString() {
        return "ContactDTO{" +
                "firstName=" + firstName 
                + ", lastName=" + lastName 
                + ", email=" + email 
                + ", phone=" + phone 
                + ", briefMessage=" + briefMessage 
                + '}';
    }
}
