package CS2001.Group47.ELearning_Platform.dto;

public class StudentPostDTO {

    String firstName;
    String lastName;
    String dateOfBirth;
    String country;
    String phone;
    String email;
    String password;
    String url;
    byte[] avatar;
    String bio;
    String optionValue;
    String role;
String twitter;
String instagram;
String linkedIn;
    public StudentPostDTO(String twitter, String instagram,String linkedIn,String role, String optionValue, String bio, String url, byte[] avatar, String firstName,
            String lastName,
            String dateOfBirth,
            String country,
            String phone, String email,
            String password) {
        super();
        this.twitter = twitter;
		this.linkedIn = linkedIn;
		this.instagram = instagram;
        this.role = role;
        this.optionValue = optionValue;
        this.bio = bio;
        this.url = url;
        this.avatar = avatar;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.country = country;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }

    

    public String getTwitter() {
        return twitter;
    }



    public void setTwitter(String twitter) {
        this.twitter = twitter;
    }



    public String getInstagram() {
        return instagram;
    }



    public void setInstagram(String instagram) {
        this.instagram = instagram;
    }



    public String getLinkedIn() {
        return linkedIn;
    }



    public void setLinkedIn(String linkedIn) {
        this.linkedIn = linkedIn;
    }



    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getOptionValue() {
        return optionValue;
    }

    public void setOptionValue(String optionValue) {
        this.optionValue = optionValue;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public byte[] getAvatarByte() {
        return avatar;
    }

    public void setAvatarByte(byte[] avatar) {
        this.avatar = avatar;
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

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateoOfBirth) {
        this.dateOfBirth = dateoOfBirth;
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "StudentPostDTO [firstName=" + "role=" + role + firstName + "twitter=" +twitter + "linkedIn=" +linkedIn+ "instagram=" +instagram + "profile" + "optionValue=" + optionValue
                + url + "bio=" + bio
                + "profile=" + avatar
                + ", lastName="
                + lastName + ", dateoOfBirth=" + dateOfBirth
                + ", country=" + country + ", phone=" + phone + ", email=" + email + ", password=" + password + "]";
    }

}
