package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Messages")
@EntityListeners(AuditingEntityListener.class)
public class Messages implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer messageID;
	
	@NotBlank
	String message;
	
	@NotBlank
	int mLikes;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdAtDate;

	public Messages() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Messages(String message, int mLikes, Date createdAtDate) {
		super();
		this.message = message;
		this.mLikes = mLikes;
		this.createdAtDate = createdAtDate;
	}

	public Integer getMessageID() {
		return messageID;
	}

	public void setMessageID(Integer messageID) {
		this.messageID = messageID;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getmLikes() {
		return mLikes;
	}

	public void setmLikes(int mLikes) {
		this.mLikes = mLikes;
	}

	public Date getCreatedAtDate() {
		return createdAtDate;
	}

	public void setCreatedAtDate(Date createdAtDate) {
		this.createdAtDate = createdAtDate;
	}

	@Override
	public String toString() {
		return "Messages [messageID=" + messageID + ", message=" + message + ", mLikes=" + mLikes + ", createdAtDate="
				+ createdAtDate + "]";
	}	

}

