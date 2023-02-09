package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "courses")
@EntityListeners(AuditingEntityListener.class)
public class Courses implements Serializable {

	/**
	 * 
	 */
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "courseid")
	Integer courseID;
	
	@NotBlank
	@Column(name="course_name")
	String courseName;
	
    @OneToMany(mappedBy = "courses"
	 , cascade = CascadeType.ALL
	   )
	   @JsonIgnore

	private List <Videos> videos = new ArrayList<>() ;







	public Courses() {
		// TODO Auto-generated constructor stub
	}

	public Courses(@NotBlank String courseName) {
		super();
		this.courseName = courseName;
	}

	public Integer getCourseID() {
		return courseID;
	}

	public void setCourseID(Integer courseID) {
		this.courseID = courseID;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public List<Videos> getVideos() {
		return videos;
	}

	public void setVideos(List<Videos> videos) {
		this.videos = videos;
	}


	
	@Override
	public String toString() {
		return "Courses [courseID=" + courseID + ", courseName=" + courseName + "]";
	}
	
}
