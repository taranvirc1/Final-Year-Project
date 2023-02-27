package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;
import java.util.Arrays;
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

	@NotBlank
	String[] fTags;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date fDateCreated;

	public Threads() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Threads(String threadName, String[] fTags) {
		super();
		this.threadName = threadName;
		this.fTags = fTags;
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
	

	public String[] getfTags() {
		return fTags;
	}

	public void setfTags(String[] fTags) {
		this.fTags = fTags;
	}

	public Date getfDateCreated() {
		return fDateCreated;
	}

	public void settDateCreated(Date fDateCreated) {
		this.fDateCreated = fDateCreated;
	}

	@Override
	public String toString() {
		return "Threads [id=" + id + ", threadName=" + threadName + ", fTags=" + Arrays.toString(fTags)
				+ ", fDateCreated=" + fDateCreated + "]";
	}


	
}
