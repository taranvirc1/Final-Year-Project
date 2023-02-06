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
@Table(name = "Rate_Review")
@EntityListeners(AuditingEntityListener.class)
public class Rate_Review implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer ratingID;
	
	@NotBlank
	int ratingStars;
	
	@NotBlank
	double averageRating;

	
	@NotBlank
	String reviewDesc;

	

	public Rate_Review() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Rate_Review(@NotBlank int ratingStars, @NotBlank double averageRating,@NotBlank String reviewDesc) {
		super();
		this.ratingStars = ratingStars;
		this.averageRating = averageRating;
		this.reviewDesc = reviewDesc;

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
	
	public double getAverageRating() {
		return this.averageRating;
	}

	public void setAverageRating(double averageRating) {
		this.averageRating = averageRating;
	}
	
	public String getReviewDesc() {
		return this.reviewDesc;
	}

	public void setReviewDesc(String reviewDesc) {
		this.reviewDesc = reviewDesc;
	}

	@ManyToOne
	@Column(name = "courseID")
	private Courses courses;
	
	@ManyToOne
	@Column(name = "studentID")
    private Student student;


@Override
	public String toString() {
		return "Rate_Review [ratingID=" + ratingID + ", ratingStars=" + ratingStars + ", averageRating=" + averageRating + ", reviewDesc=" + averageRating +"]";
	}
	
      

}
