package CS2001.Group47.ELearning_Platform.service;

import java.util.List;
import java.util.Optional;

import CS2001.Group47.ELearning_Platform.model.Question;

public interface QuestionService {
  
  List<Question> getAllQuestions();
  
  Optional<Question> getQuestionById(Long id);
  
  Question saveQuestion(Question question);
  
  void deleteQuestionById(Long id);

  


}
