package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "rate_review")
@EntityListeners(AuditingEntityListener.class)
public class Rate_Review implements Serializable {

	/**
	 * 
	 */
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ratingid")
	Integer ratingID;
	
	@Column(name="rating_stars")
	int ratingStars;
	
	

	@NotBlank
	@Column(name="review_desc")
	String reviewDesc;


	@ManyToOne( fetch = FetchType.EAGER)
	@JoinColumn(name = "course")
	//@JsonIgnore
	private Courses courses;

	@ManyToOne( fetch = FetchType.EAGER)
	@JoinColumn(name = "student")
	//@JsonIgnore
	private Student students;


	

	public Rate_Review() {
		// TODO Auto-generated constructor stub
	}


	public Rate_Review(@NotBlank int ratingStars,@NotBlank String reviewDesc, Courses courses, Student students) {
		super();
		this.ratingStars = ratingStars;
		this.reviewDesc = reviewDesc;
		this.courses= courses;
		this.students = students;

	}


	public Integer getRatingID() {
		return this.ratingID;
	}

	public void setRatingID(Integer ratingID) {
		this.ratingID = ratingID;
	}

	public int getRatingStars() {
		return this.ratingStars;
	}

	public void setRatingStars(int ratingStars) {
		this.ratingStars = ratingStars;
	}
	
	
	
	public String getReviewDesc() {
		return this.reviewDesc;
	}

	public void setReviewDesc(String reviewDesc) {
		this.reviewDesc = reviewDesc;
	}

	public Courses getCourses() {
		return courses;
	}


	public void setCourses(Courses courses) {
		this.courses = courses;
	}


	public Student getStudents() {
		return students;
	}


	public void setStudents(Student students) {
		this.students = students;
	}

	
  


	
	
	// @ManyToOne
	// @Column(name = "studentID")
    // private Student student;


@Override
	public String toString() {
		return "Rate_Review [ratingID=" + ratingID + ", ratingStars=" + ratingStars + ", reviewDesc=" + reviewDesc + ", courses="+ courses+ "students="+ students+"]";
	}
	
      

}
