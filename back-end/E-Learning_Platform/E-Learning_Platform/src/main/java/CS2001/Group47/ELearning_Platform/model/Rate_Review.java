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
	int rankingStars;
	
	@NotBlank
	double averageRating;
	
	@NotBlank
	String reviewDesc;
	
//	@ManyToOne
//	@Column(name = "Courses")
//	private Courses courses;
//	
//	@ManyToOne
//	@Column(name = "Student")
//	private Student student;

}
