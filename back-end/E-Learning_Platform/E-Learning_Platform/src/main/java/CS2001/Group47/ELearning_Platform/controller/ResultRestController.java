package CS2001.Group47.ELearning_Platform.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import CS2001.Group47.ELearning_Platform.model.Result;
import CS2001.Group47.ELearning_Platform.service.ResultService;

@RestController
@RequestMapping("/api/results")
public class ResultRestController {

  @Autowired
  private ResultService resultService;

  @GetMapping
  public ResponseEntity<List<Result>> getAllResults() {
    List<Result> results = resultService.getAllResults();
    if (results.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    return new ResponseEntity<>(results, HttpStatus.OK);
  }










  

  @GetMapping("/{resultId}")
  public ResponseEntity<Result> getResultById(@PathVariable Long resultId) {
    Optional<Result> result = resultService.getResultById(resultId);
    return result.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping
  public ResponseEntity<Result> createResult(@RequestBody Result result) {
    return new ResponseEntity<>(resultService.saveResult(result), HttpStatus.CREATED);
  }

  @DeleteMapping("/{resultId}")
  public ResponseEntity<Void> deleteResultById(@PathVariable Long resultId) {
    resultService.deleteResultById(resultId);
    return ResponseEntity.noContent().build();
  }
  
  @GetMapping("/student/{studentId}")
  public ResponseEntity<List<Result>> getResultsByStudentId(@PathVariable Long studentId) {
    List<Result> results = resultService.getResultsByStudentId(studentId);
    if (results.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    return new ResponseEntity<>(results, HttpStatus.OK);
  }
}
