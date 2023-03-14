package CS2001.Group47.ELearning_Platform.service;

import java.util.List;
import java.util.Optional;

import CS2001.Group47.ELearning_Platform.model.Answer;

public interface AnswerService {
  
  List<Answer> getAllAnswers();
  
  Optional<Answer> getAnswerById(Long id);
  
  Answer saveAnswer(Answer answer);
  
  void deleteAnswerById(Long id);
  
  List<Answer> getAnswersByStudentId(Long studentId);
  
  List<Answer> getAnswersByQuestionId(Long questionId);
}
