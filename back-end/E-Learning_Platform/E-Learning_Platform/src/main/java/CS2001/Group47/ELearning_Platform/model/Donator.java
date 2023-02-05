package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;


@Entity
@Table(name = "Donators")
@EntityListeners(AuditingEntityListener.class)
public class Donator implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	
	@NotBlank
	String donatorTitle;
	
	@NotBlank
	String firstName;
	
	@NotBlank
	String lastName;
	
	@NotBlank
	String phone;
	
	@NotBlank
	String email;
	
	@NotBlank
	String question1;
	
	@NotBlank
	String question2;
	
	public Donator() {
		
		super();
		
	}

	public Donator(String donatorTitle, String firstName, String lastName, String phone, String email, String question1, String question2) {
		
		super();
		this.donatorTitle = donatorTitle;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.question1 = question1;
		this.question2 = question2;
	
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDonatorTitle() {
		return donatorTitle;
	}

	public void setDonatorTitle(String donatorTitle) {
		this.donatorTitle = donatorTitle;
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

	public String getQuestion1() {
		return question1;
	}

	public void setQuestion1(String question1) {
		this.question1 = question1;
	}

	public String getQuestion2() {
		return question2;
	}

	public void setQuestion2(String question2) {
		this.question2 = question2;
	}

	@Override
	public String toString() {
		return "Donator [id=" + id + ", donatorTitle=" + donatorTitle + ", firstName=" + firstName + ", lastName="
				+ lastName + ", phone=" + phone + ", email=" + email + ", question1=" + question1 + ", question2="
				+ question2 + "]";
	}
	
	
	
}