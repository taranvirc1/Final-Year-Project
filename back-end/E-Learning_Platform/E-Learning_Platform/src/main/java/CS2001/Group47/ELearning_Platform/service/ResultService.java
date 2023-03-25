package CS2001.Group47.ELearning_Platform.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.model.Result;
import CS2001.Group47.ELearning_Platform.repository.ResultRepository;

public interface ResultService {
    Result saveResult(Result result);
    List<Result> getAllResults();
    Optional<Result> getResultById(Long id);
    List<Result> getResultsByStudentId(Long studentId);
    void deleteResultById(Long resultId);
}

@Service
class ResultServiceImpl implements ResultService {
  
  @Autowired
  private ResultRepository resultRepository;

  @Override
  public List<Result> getAllResults() {
    return resultRepository.findAll();
  }

  @Override
  public Optional<Result> getResultById(Long id) {
    return resultRepository.findById(id);
  }

  @Override
  public Result saveResult(Result result) {
    return resultRepository.save(result);
  }

  @Override
  public List<Result> getResultsByStudentId(Long studentId) {
    return resultRepository.findByStudent(studentId);
  }

  @Override
  public void deleteResultById(Long resultId) {
    throw new UnsupportedOperationException("Unimplemented method 'deleteResultById'");
  }
}
