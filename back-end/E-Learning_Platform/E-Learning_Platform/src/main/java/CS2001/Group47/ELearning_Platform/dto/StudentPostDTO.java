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

    public StudentPostDTO(String bio, String url, byte[] avatar, String firstName, String lastName, String dateOfBirth,
            String country,
            String phone, String email,
            String password) {
        super();
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
        return "StudentPostDTO [firstName=" + firstName + "profile" + url + "bio=" + bio + "profile=" + avatar
                + ", lastName="
                + lastName + ", dateoOfBirth=" + dateOfBirth
                + ", country=" + country + ", phone=" + phone + ", email=" + email + ", password=" + password + "]";
    }

}
