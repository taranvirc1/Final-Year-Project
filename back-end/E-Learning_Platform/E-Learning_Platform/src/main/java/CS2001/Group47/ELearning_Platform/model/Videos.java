package CS2001.Group47.ELearning_Platform.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "videos")
public class Videos {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(table="videoID")
	private Integer videoID;

	@Column(table="Url")
    private String Url;

	@Column(table="courseID")
	private Integer courseID;

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

	public Integer getCourseID() {
		return this.courseID;
	}

	public void setCourseID(Integer courseID) {
		this.courseID = courseID;
	}

      

}
