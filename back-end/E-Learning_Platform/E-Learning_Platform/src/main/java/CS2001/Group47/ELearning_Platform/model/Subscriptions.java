package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Subscriptions")
@EntityListeners(AuditingEntityListener.class)
public class Subscriptions implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer subIid;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdAtDate;
	
	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date updatedAt;

//	@ManyToOne
//	@JoinColumn(name = "Students")
//	private Student student;
//	
//	@ManyToOne
//	@JoinColumn(name = "Threads")
//	private Threads thread;

	public Subscriptions() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Subscriptions(Date createdAtDate, Date updatedAt) {
		super();
		this.createdAtDate = createdAtDate;
		this.updatedAt = updatedAt;
	}

	public Integer getSubIid() {
		return subIid;
	}



	public void setSubIid(Integer subIid) {
		this.subIid = subIid;
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



	@Override
	public String toString() {
		return "Subscriptions [subIid=" + subIid + ", createdAtDate=" + createdAtDate + ", updatedAt=" + updatedAt
				+ "]";
	}
	

}
