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
@Table(name = "Threads")
@EntityListeners(AuditingEntityListener.class)
public class Threads implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	
	@NotBlank
	String threadName;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date tDateCreated;

	public Threads() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Threads(String threadName, Date tDateCreated) {
		super();
		this.threadName = threadName;
		this.tDateCreated = tDateCreated;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getThreadName() {
		return threadName;
	}

	public void setThreadName(String threadName) {
		this.threadName = threadName;
	}

	public Date gettDateCreated() {
		return tDateCreated;
	}

	public void settDateCreated(Date tDateCreated) {
		this.tDateCreated = tDateCreated;
	}

	@Override
	public String toString() {
		return "Threads [id=" + id + ", threadName=" + threadName + ", tDateCreated=" + tDateCreated + "]";
	}
	
}
