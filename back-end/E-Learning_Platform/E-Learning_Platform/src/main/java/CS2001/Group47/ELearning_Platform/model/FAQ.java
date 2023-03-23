package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;

//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "faq")
@EntityListeners(AuditingEntityListener.class)
public class FAQ implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

    String question;
    String answer;

    public FAQ(){
        super();
    }

    public FAQ(String question, String answer){
        super();
        this.question=question;
        this.answer=answer;

    }

    public void setQuestion(String question){
        this.question=question;
    }

    public String getQuestion(){
        return question;
    }

    public void setAnswer(String answer){
        this.answer=answer;
    }

    public String getAnswer(){
        return answer;
    }

    @Override
	public String toString() {
		return "FAQ [question=" + question + ", answer=" + answer + "]";
	}







}
