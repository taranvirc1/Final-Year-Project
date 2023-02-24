package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "student")
@EntityListeners(AuditingEntityListener.class)
public class Student implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer studentId;

	@NotBlank
	String firstName;

	@NotBlank
	String lastName;

	@NotBlank
	String dateOfBirth;

	@NotBlank
	String country;

	@NotBlank
	String phone;

	@NotBlank
	@Column(unique = true)
	String email;

	@NotBlank
	String password;

	String resetPasswordToken;
	@Column(name = "Biog")
	private String bio;

	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdAtDate;
	@Lob
	@Column(name = "url", length = Integer.MAX_VALUE, nullable = true)
	private String url;

	@Lob
	@Column(name = "image")
	private byte[] avatar;

	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date updatedAt;

	@OneToMany(mappedBy = "students", cascade = CascadeType.ALL)
	@JsonIgnore

	private List<Rate_Review> rate_Reviews = new ArrayList<>();

	public Student() {

		super();

	}

	public Student(String firstName, String lastName, String dateOfBirth,
			String country, String phone, String email,
			String password) {

		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.country = country;
		this.phone = phone;
		this.email = email;
		this.password = password;

	}

	public Student(String bio, byte[] avatar, String url, String firstName, String lastName, String dateOfBirth,
			String country, String phone, String email,
			String password) {

		super();
		this.bio = bio;
		this.avatar = avatar;
		this.url = url;
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

	public byte[] getAvatar() {
		return avatar;
	}

	public void setAvatar(byte[] avatar) {
		this.avatar = avatar;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String imageUrl) {
		this.url = imageUrl;
	}

	public Integer getStudentId() {
		return studentId;
	}

	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
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

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
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

	public Date getCreatedAtDate() {
		return createdAtDate;
	}

	public void setCreatedAtDate(Date createdAtDate) {
		this.createdAtDate = createdAtDate;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public String getResetPasswordToken() {
		return resetPasswordToken;
	}

	public void setResetPasswordToken(String resetPasswordToken) {
		this.resetPasswordToken = resetPasswordToken;
	}

	public List<Rate_Review> getRate_Reviews() {
		return rate_Reviews;
	}

	public void setRate_Reviews(List<Rate_Review> rate_Reviews) {
		this.rate_Reviews = rate_Reviews;
	}

	@Override
	public String toString() {
		return "Student [id=" + studentId + url + "profile=" + avatar + "bio=" + bio + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", dateOfBirth="
				+ dateOfBirth + ", country=" + country + ", phone=" + phone + ", email=" + email + ", password="
				+ password + ", createdAtDate=" + createdAtDate + ", updatedAt=" + updatedAt + "]";
	}

}
