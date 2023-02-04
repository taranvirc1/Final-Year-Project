package CS2001.Group47.ELearning_Platform.model;
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
	private Integer videoID;
    private String Url;
	private Integer courseID;
      

}
