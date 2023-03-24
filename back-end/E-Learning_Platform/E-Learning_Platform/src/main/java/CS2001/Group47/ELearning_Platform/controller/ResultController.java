package CS2001.Group47.ELearning_Platform.controller;

import CS2001.Group47.ELearning_Platform.dto.ResultDTO;
import CS2001.Group47.ELearning_Platform.model.Result;
import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import CS2001.Group47.ELearning_Platform.service.StudentService;

import java.util.List;

@RestController
@RequestMapping("/api/results")
public class ResultController {

    @Autowired
    private ResultService resultService;

    @Autowired
    private StudentService studentService;

    @PostMapping
public ResponseEntity<Result> saveResult(@RequestBody ResultDTO resultDTO) {
    System.out.println("Received request: " + resultDTO.toString()); // Add this line for logging
    Student student = studentService.findByEmail(resultDTO.getEmail());
    if (student == null) {
        System.out.println("Student not found"); // Add this line for logging
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
    Result result = new Result(student, resultDTO.getScore());
    Result savedResult = resultService.saveResult(result);
    return new ResponseEntity<>(savedResult, HttpStatus.CREATED);
}

    @GetMapping
    public ResponseEntity<List<Result>> getResults() {
        List<Result> results = resultService.getResults();
        return new ResponseEntity<>(results, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Result> getResultById(@PathVariable Long id) {
        Result result = resultService.getResultById(id);
        if (result == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }
}
