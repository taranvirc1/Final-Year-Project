package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "ContactInfo")
@EntityListeners(AuditingEntityListener.class)
public class ContactInfo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer contactId;

	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date tDateCreated;

	@NotBlank
	String firstName;

	@NotBlank
	String lastName;

	@NotBlank
	String email;

	@NotBlank
	String phone;

	@NotBlank
	String briefMessage;

	public ContactInfo() {

		super();
		
	}

	public ContactInfo(Date tDateCreated, String firstName, String lastName, String email, String phone, String briefMessage) {
		super();
		this.tDateCreated = tDateCreated;
		this.contactFirstName = firstName;
		this.contactLastName = lastName;
		this.contactEmail = email;
		this.contactPhone = phone;
		this.contactMessage = briefMessage;

	}

	public Integer getContactID(){
		return contactId;
	}

	public void setContactID(Interger contactId){
		this.contactId = contactId;
	}

	public gettDateCreated(){
		return tDateCreated;
	}

	public void settDateCreated(Date tDateCreated){
		this.tDateCreated = tDateCreated;
	}

	public firstName(){
		return firstName;
	}

	public void setFirstName(String firstName){
		this.firstName = firstName;
	}

	public getLastName(){
		return lastName;
	}

	public void setLastName(String lastName){
		this.lastName = lastName;
	}

	public getEmail(){
		return email;
	}

	public void setEmail(String email){
		this.email = email;
	}

	public getPhone(){
		return phone;
	}

	public void setPhone(String phone){
		this.phone = phone;
	}

	public getBriefMessage(){
		return briefMessage;
	}

	public void setBriefMessage(String briefMessage){
		this.briefMessage = briefMessage;
	}

	@Override
	public String toString() {
		return "ContactInfo [contactId=" + contactId + ", tDateCreated=" + tDateCreated + ", firstName=" + firstName + ", lastName=" + lastName + 
		", email=" + email + ", phone=" + phone + ",briefMessage=" + briefMessage + "]";
	}

	
	
}


