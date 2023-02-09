package CS2001.Group47.ELearning_Platform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.model.Courses;
import CS2001.Group47.ELearning_Platform.repository.CoursesRepository;

@RestController

public class coursesController {
    @Autowired
    private CoursesRepository Coursesrepository;

    @RequestMapping("/cars")
        public Iterable<Courses> getCourses() {
            return Coursesrepository.findAll();

    
        } 
}
