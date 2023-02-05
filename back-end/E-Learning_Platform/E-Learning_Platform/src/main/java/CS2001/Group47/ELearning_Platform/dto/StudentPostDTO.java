package CS2001.Group47.ELearning_Platform.dto;

import java.util.Date;

public class StudentPostDTO {
	
    String firstName;
    String lastName;
    String dateoOfBirth;
    String country;
    String phone;
    String email;
    String password;
    
    public StudentPostDTO(String firstName, String lastName, String dateoOfBirth, String country, String phone,
            String email, String password) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateoOfBirth = dateoOfBirth;
        this.country = country;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }

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

    public String getDateoOfBirth() {
        return dateoOfBirth;
    }

    public void setDateoOfBirth(String dateoOfBirth) {
        this.dateoOfBirth = dateoOfBirth;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
