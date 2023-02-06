package CS2001.Group47.ELearning_Platform.model;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "videos")
@EntityListeners(AuditingEntityListener.class)

public class Videos implements Serializable{

	private static final long serialVersionUID = 1L;

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer videoID;

	@NotBlank
    private String Url;

	@NotBlank
	private String topicName;

	
	
    @ManyToOne
	@Column(name = "courseID")
    private Courses courses;

	
	public Videos() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Videos(@NotBlank String Url, @NotBlank String topicName) {
		super();
		this.Url = Url;
		this.topicName = topicName;
	}



	public Integer getVideoID() {
		return this.videoID;
	}

	public void setVideoID(Integer videoID) {
		this.videoID = videoID;
	}

	public String getUrl() {
		return this.Url;
	}

	public void setUrl(String Url) {
		this.Url = Url;
	}


	public String getTopicName() {
		return this.topicName;
	}

	public void setTopicName(String topicName) {
		this.topicName = topicName;
	}

	

	@Override
	public String toString() {
		return "Videos [videoID=" + videoID + ", Url=" + Url + ", topicName=" + topicName + "]";
	}
	
      

}
