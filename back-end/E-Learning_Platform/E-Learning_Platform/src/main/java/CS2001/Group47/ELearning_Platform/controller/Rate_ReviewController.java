package CS2001.Group47.ELearning_Platform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.dto.ReviewPostDTO;
import CS2001.Group47.ELearning_Platform.exception.ResourceNotFoundException;
import CS2001.Group47.ELearning_Platform.model.Courses;
import CS2001.Group47.ELearning_Platform.model.Rate_Review;
import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.repository.Rate_ReviewRepository;
import CS2001.Group47.ELearning_Platform.service.CoursesService;
import CS2001.Group47.ELearning_Platform.service.Rate_ReviewService;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import javax.management.RuntimeErrorException;

@RestController
public class Rate_ReviewController {
    @Autowired
    // Rate_ReviewService reviewService;
      Rate_ReviewRepository rate_ReviewRepository;
     
      
    ReviewPostDTO newReviewPostDTO;
       @Autowired
       CoursesService coursesService;
       @Autowired
       StudentController studentController;
       @Autowired
      Rate_ReviewService reviewService;
    @PostMapping("/review")
    public ResponseEntity<Optional<Rate_Review>> addReview(@RequestBody ReviewPostDTO newReviewPostDTO, Principal principal) {
        String email = currentUserName(principal);
        
        if (reviewService.findByEmail(email)!=null) {
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
        };
  
         Courses courses = coursesService.getCoursesById(newReviewPostDTO.getCourseID());
        
         Student  student = studentController.getByEmail(email);

         Rate_Review newReview = new Rate_Review(newReviewPostDTO.getRatingStars(),newReviewPostDTO.getReviewDesc(), courses,student,newReviewPostDTO.getCreatedAt());

         reviewService.addReview(newReview);

         //Return response entity with new user and CREATED status
         return new ResponseEntity<>(Optional.ofNullable(newReview), HttpStatus.CREATED);


    }

    @GetMapping("/getReviews")  
    public List<Rate_Review> getAllReview() {
        
        return reviewService.getReviews();

    }


    @RequestMapping(value = "/username", method = RequestMethod.GET)
    @ResponseBody
    public String currentUserName(Principal principal) {
        return principal.getName();
    }

    @GetMapping("/review/getByEmail")
    public Rate_Review getByEmail(@RequestParam String email) {
    	
    	return (reviewService.findByEmail(email));
    	
    }


    //build update review
  @PutMapping("update/{ratingID}")
  public ResponseEntity<Optional<Rate_Review>> updateReview(@RequestBody ReviewPostDTO newReviewPostDTO, Principal principal) {
    String email = currentUserName(principal);
    
  

     Courses courses = coursesService.getCoursesById(newReviewPostDTO.getCourseID());
    
     Student  student = studentController.getByEmail(email);



     Rate_Review newReview = new Rate_Review();
     newReview.setRatingID(newReviewPostDTO.getRatingID());
     newReview.setRatingStars(newReviewPostDTO.getRatingStars());
     newReview.setReviewDesc(newReviewPostDTO.getReviewDesc());
     newReview.setCourses(courses);
     newReview.setStudents(student);
     newReview.setCreatedAt(newReviewPostDTO.getCreatedAt());



     reviewService.addReview(newReview);

     //Return response entity with new user and CREATED status
     return new ResponseEntity<>(Optional.ofNullable(newReview), HttpStatus.CREATED);


}
}
