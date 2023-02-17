package CS2001.Group47.ELearning_Platform.controller;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.dto.ReviewPostDTO;
import CS2001.Group47.ELearning_Platform.model.Courses;
import CS2001.Group47.ELearning_Platform.model.Rate_Review;
import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.service.CoursesService;
import CS2001.Group47.ELearning_Platform.service.Rate_ReviewService;
import CS2001.Group47.ELearning_Platform.service.StudentService;

import java.util.List;
import java.util.Optional;

@RestController
public class Rate_ReviewController {
    // Rate_ReviewService reviewService;

     
      
    ReviewPostDTO newReviewPostDTO;
       @Autowired
       CoursesService coursesService;
       @Autowired
       StudentService studentService;
       @Autowired
      Rate_ReviewService reviewService;
    @PostMapping("/review")
    public ResponseEntity<Optional<Rate_Review>> addReview(@RequestBody ReviewPostDTO newReviewPostDTO) {
//         Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
// String currentPrincipalName = authentication.getName();
         Courses courses = coursesService.getCoursesById(newReviewPostDTO.getCourseID());
         Student student = studentService.getStudentbyId(newReviewPostDTO.getStudentId());

         Rate_Review newReview = new Rate_Review(newReviewPostDTO.getRatingStars(),newReviewPostDTO.getReviewDesc(), courses,student);

         reviewService.addReview(newReview);

         //Return response entity with new user and CREATED status
         return new ResponseEntity<>(Optional.ofNullable(newReview), HttpStatus.CREATED);


    }

    @GetMapping("/getReviews")  
    public List<Rate_Review> getAllReview() {
        
        return reviewService.getReviews();

    }
}
