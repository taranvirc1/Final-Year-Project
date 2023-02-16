package CS2001.Group47.ELearning_Platform.dto;

public class DonatorDTO {

    String donatorTitle;
    String firstName;
    String lastName;
    String phone;
    String email;
    String howHear;
    String motivate;
    
    public DonatorDTO(String donatorTitle, String firstName, String lastName, String phone, String email, String howHear, String motivate) {
        super();
        this.donatorTitle - donatorTitle;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.howHear = howHear
        this.motivate = motivate;
    }

    public String getDonatorTitle() {
        return donatorTitle;
    }
    
    public void setDonatorTitle(String donatorTitle) {
        this.donatorTitle = donatorTitle;
    }
    
    
    public String getFirstName() {
        return FirstName;
    }
    
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    
    public String getLastName() {
        return lastName;
    }
    
    public void setLastName(String lastName) {
        this.amount = lastName;
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
    public String gethowHear() {
        return howHear;
    }
    
    public void sethowhear(String howHear) {
        this.howHear = howHear;
    }
     public String getmotivate() {
        return motivate;
    }
    
    public void setmotivate(String motivate) {
        this.motivate = motivate;
    }
    
    @Override
    public String toString() {
        return "DonatorDTO [donatorTitle=" + donatorTitle + ", firstName=" + firstName + ", lastName=" + lastName + ", phone=" + phone + ", email=" + email + ", howHear=" + howHear + ", motivate=" + motivate + "]";
    }
}