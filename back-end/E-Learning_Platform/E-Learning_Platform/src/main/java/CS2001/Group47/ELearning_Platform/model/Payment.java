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
import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Payments")
@EntityListeners(AuditingEntityListener.class)
public class Payment implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	
	@NotBlank
	int cardNo;
	
	@NotBlank
	int cvv;
	
	@NotBlank
	String cardType;
	
	@NotBlank
	String expiryDate;
	
	@NotBlank
	String billingFirstName;
	
	@NotBlank
	String billingLastName;
	
	@NotBlank
	String country;
	
	@NotBlank
	String city;
	
	@NotBlank
	String address1;
	
	@NotBlank
	String address2;
	
	@NotBlank
	String postCode;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdAtDate;

	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Payment(@NotBlank int cardNo, @NotBlank int cvv, @NotBlank String cardType, @NotBlank String expiryDate,
			@NotBlank String billingFirstName, @NotBlank String billingLastName, @NotBlank String country,
			@NotBlank String city, @NotBlank String address1, @NotBlank String address2, @NotBlank String postCode) {
		super();
		this.cardNo = cardNo;
		this.cvv = cvv;
		this.cardType = cardType;
		this.expiryDate = expiryDate;
		this.billingFirstName = billingFirstName;
		this.billingLastName = billingLastName;
		this.country = country;
		this.city = city;
		this.address1 = address1;
		this.address2 = address2;
		this.postCode = postCode;
	}
	
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public int getCardNo() {
		return cardNo;
	}

	public void setCardNo(int cardNo) {
		this.cardNo = cardNo;
	}

	public int getCvv() {
		return cvv;
	}

	public void setCvv(int cvv) {
		this.cvv = cvv;
	}

	public String getCardType() {
		return cardType;
	}

	public void setCardType(String cardType) {
		this.cardType = cardType;
	}

	public String getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(String expiryDate) {
		this.expiryDate = expiryDate;
	}

	public String getBillingFirstName() {
		return billingFirstName;
	}

	public void setBillingFirstName(String billingFirstName) {
		this.billingFirstName = billingFirstName;
	}

	public String getBillingLastName() {
		return billingLastName;
	}

	public void setBillingLastName(String billingLastName) {
		this.billingLastName = billingLastName;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public String getPostCode() {
		return postCode;
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}

	public Date getCreatedAtDate() {
		return createdAtDate;
	}

	public void setCreatedAtDate(Date createdAtDate) {
		this.createdAtDate = createdAtDate;
	}

	@Override
	public String toString() {
		return "Payment [id=" + id + ", cardNo=" + cardNo + ", cvv=" + cvv + ", cardType=" + cardType + ", expiryDate="
				+ expiryDate + ", billingFirstName=" + billingFirstName + ", billingLastName=" + billingLastName
				+ ", country=" + country + ", city=" + city + ", address1=" + address1 + ", address2=" + address2
				+ ", postCode=" + postCode + ", createdAtDate=" + createdAtDate + "]";
	}
	
	
	
}

