package CS2001.Group47.ELearning_Platform.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.dto.StudentPostDTO;
import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.service.StudentService;

@RestController
public class StudentController {
    
    @Autowired
    StudentService studentService;

    @GetMapping("/user")
    public List<Student> getAllUsers() {
        
        return studentService.getStudents();

    }

    @PostMapping("/user")
    public ResponseEntity<Optional<Student>> addUser(@RequestBody StudentPostDTO newStudentDTO) {
        //StudentDTO has null attributes
        if(newStudentDTO.getFirstName() == null ||
        newStudentDTO.getLastName() == null ||
        newStudentDTO.getDateoOfBirth() == null ||
        newStudentDTO.getCountry() == null ||
        newStudentDTO.getPhone() == null ||
        newStudentDTO.getEmail() == null ||
        newStudentDTO.getPassword() == null) {

            //Return response entity with error and BAD REQUEST status
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);

        }

        //Else create a student with DTO
        Student newStudent = new Student(newStudentDTO.getFirstName(), newStudentDTO.getLastName(), newStudentDTO.getDateoOfBirth(), newStudentDTO.getCountry(), newStudentDTO.getPhone(), newStudentDTO.getEmail(), newStudentDTO.getPassword());
        //Add student through StudentService
        studentService.addStudent(newStudent);

        //Return response entity with new user and CREATED status
        return new ResponseEntity<>(Optional.ofNullable(newStudent), HttpStatus.CREATED);

    }

    @GetMapping("/user/{id}")
    public Optional<Student> getStudentbyId(@PathVariable(value = "id") Integer Id) {

        //Return a user with the specified ID
        return studentService.findByID(Id);

    }

    @DeleteMapping("user/{id}")
    public String deleteStudent(@PathVariable(value = "id") Integer Id) {

        //Delete student by using their ID
        studentService.deleteStudent(Id);
        return "Student Deleted";

    }

    @GetMapping("/user/findByEmail")
    public Optional<Student> getUserByEmail(@RequestParam String email) {
    	
    	return Optional.ofNullable(studentService.findByEmail(email));
    	
    }

}
