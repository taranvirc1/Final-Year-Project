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
@Table(name = "Courses")
@EntityListeners(AuditingEntityListener.class)
public class Courses implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer courseID;
	
	@NotBlank
	String courseName;
	
	@NotBlank
	String courseDescription;

	public Courses() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Courses(@NotBlank String courseName, @NotBlank String courseDescription) {
		super();
		this.courseName = courseName;
		this.courseDescription = courseDescription;
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

	public String getCourseDescription() {
		return courseDescription;
	}

	public void setCourseDescription(String courseDescription) {
		this.courseDescription = courseDescription;
	}

	@Override
	public String toString() {
		return "Courses [courseID=" + courseID + ", courseName=" + courseName + ", courseDescription=" + courseDescription + "]";
	}
	
}
