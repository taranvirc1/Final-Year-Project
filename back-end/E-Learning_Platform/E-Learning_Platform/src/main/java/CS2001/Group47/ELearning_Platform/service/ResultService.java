package CS2001.Group47.ELearning_Platform.service;

import java.util.List;
import java.util.Optional;

import CS2001.Group47.ELearning_Platform.model.Result;

public interface ResultService {
    Result saveResult(Result result);
    List<Result> getAllResults();
    Optional<Result> getResultById(Long id);
    List<Result> getResultsByStudentId(Long studentId);
    void deleteResultById(Long resultId);
}
