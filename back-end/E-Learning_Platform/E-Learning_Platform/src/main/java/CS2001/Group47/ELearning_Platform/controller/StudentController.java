package CS2001.Group47.ELearning_Platform.controller;

import java.io.IOException;
import java.net.URL;
import java.security.Principal;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
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
import org.springframework.web.multipart.MultipartFile;

import com.vaadin.ui.Image;

import CS2001.Group47.ELearning_Platform.dto.StudentPostDTO;
import CS2001.Group47.ELearning_Platform.exception.ResourceNotFoundException;
import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.repository.StudentRepository;
import CS2001.Group47.ELearning_Platform.service.StudentService;

@RestController
public class StudentController {
    @Autowired
    StudentService studentService;
    @Autowired
    StudentRepository studentRepository;

    @GetMapping("/user")
    public List<Student> getAllUsers() {

        return studentService.getStudents();

    }


    // Below here is the profile information

    @PutMapping("/user/firstName/{id}")
    public Student updateUserField(@PathVariable Integer id, @RequestBody StudentPostDTO studentPostDTO) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            if (studentPostDTO.getFirstName() != null) {
                student.setFirstName(studentPostDTO.getFirstName());
            }
            studentRepository.save(student);
            return student;
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }

    @PutMapping("/user/lastName/{id}")
    public Student updateUserLastName(@PathVariable Integer id, @RequestBody StudentPostDTO studentPostDTO) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            if (studentPostDTO.getLastName() != null) {
                student.setLastName(studentPostDTO.getLastName());
            }
            studentRepository.save(student);
            return student;
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }

    @PutMapping("/user/email/{id}")
    public Student updateUserEmail(@PathVariable Integer id, @RequestBody StudentPostDTO studentPostDTO) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            if (studentPostDTO.getEmail() != null) {
                student.setEmail(studentPostDTO.getEmail());
            }
            studentRepository.save(student);
            return student;
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }

    @PutMapping("/user/country/{id}")
    public Student updateUserCountry(@PathVariable Integer id, @RequestBody StudentPostDTO studentPostDTO) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            if (studentPostDTO.getCountry() != null) {
                student.setCountry(studentPostDTO.getCountry());
            }
            studentRepository.save(student);
            return student;
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }

    @PutMapping("/user/phone/{id}")
    public Student updateUserPhone(@PathVariable Integer id, @RequestBody StudentPostDTO studentPostDTO) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            if (studentPostDTO.getPhone() != null) {
                student.setPhone(studentPostDTO.getPhone());
            }
            studentRepository.save(student);
            return student;
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }

    @PutMapping("/user/DOB/{id}")
    public Student updateUserDOB(@PathVariable Integer id, @RequestBody StudentPostDTO studentPostDTO) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            if (studentPostDTO.getDateOfBirth() != null) {
                student.setDateOfBirth(studentPostDTO.getDateOfBirth());
            }
            studentRepository.save(student);
            return student;
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }

    @GetMapping("/bio/{userId}")
    public String getBio(@PathVariable Integer bio) {
        return studentService.getBio(bio);
    }

    @PutMapping("/user/bio/{id}")
    public Student updateUserBio(@PathVariable Integer id, @RequestBody StudentPostDTO studentPostDTO) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            // Update the fields that the user changes
            if (studentPostDTO.getBio() != null) {
                student.setBio(studentPostDTO.getBio());
            }
            studentRepository.save(student);
            return student;
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }

    @PostMapping("/{id}/image")
    public ResponseEntity<String> uploadUserImage(@PathVariable Integer id, @RequestParam("file") MultipartFile file)
            throws IOException {
        studentService.saveUserImage(id, file);
        return ResponseEntity.ok("Image uploaded successfully");
    }

    @GetMapping("/{id}/image")
    public ResponseEntity<byte[]> getUserImage(@PathVariable Integer id) {
        byte[] image = studentService.getUserImage(id);
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(image);
    }

    @PutMapping("/user/option/{id}")
    public Student updateOption(@PathVariable Integer id, @RequestBody StudentPostDTO studentPostDTO) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            // Update the fields that the user changes
            if (studentPostDTO.getOptionValue() != null) {
                student.setOptionValue(studentPostDTO.getOptionValue());
            }
            studentRepository.save(student);
            return student;
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }

    @PutMapping("/user/role/{id}")
    public Student updateRole(@PathVariable Integer id, @RequestBody StudentPostDTO studentPostDTO) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            // Update the fields that the user changes
            if (studentPostDTO.getRole() != null) {
                student.setRole(studentPostDTO.getRole());
            }
            studentRepository.save(student);
            return student;
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }

    @PutMapping("/user/twitter/{id}")
    public Student updateTwitter(@PathVariable Integer id, @RequestBody StudentPostDTO studentPostDTO) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            // Update the fields that the user changes
            if (studentPostDTO.getTwitter() != null) {
                student.setTwitter(studentPostDTO.getTwitter());
            }
            studentRepository.save(student);
            return student;
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }

    @PutMapping("/user/linked/{id}")
    public Student updateLinked(@PathVariable Integer id, @RequestBody StudentPostDTO studentPostDTO) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            if (studentPostDTO.getLinkedIn() != null) {
                student.setLinkedIn(studentPostDTO.getLinkedIn());
            }
            studentRepository.save(student);
            return student;
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }

    @PutMapping("/user/instagram/{id}")
    public Student updateInstagram(@PathVariable Integer id, @RequestBody StudentPostDTO studentPostDTO) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            if (studentPostDTO.getInstagram() != null) {
                student.setInstagram(studentPostDTO.getInstagram());
            }
            studentRepository.save(student);
            return student;
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }

    @PutMapping("/user/username/{id}")
    public Student updateUsername(@PathVariable Integer id, @RequestBody StudentPostDTO studentPostDTO) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            if (studentPostDTO.getUsername() != null) {
                student.setUsername(studentPostDTO.getUsername());
            }
            studentRepository.save(student);
            return student;
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }

    @PostMapping("/user")
    public ResponseEntity<Optional<Student>> addUser(@RequestBody StudentPostDTO newStudentDTO) {
        // StudentDTO has null attributes
        if (newStudentDTO.getFirstName() == null ||
                newStudentDTO.getLastName() == null ||
                newStudentDTO.getDateOfBirth() == null ||
                newStudentDTO.getCountry() == null ||
                newStudentDTO.getPhone() == null ||
                newStudentDTO.getEmail() == null ||
                newStudentDTO.getPassword() == null) {

            // This is for testing purposes
            System.out.println(newStudentDTO.toString());
            // Return response entity with error and BAD REQUEST status
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);

        }

        // Create password encoder object
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        // Else create a student with DTO
        Student newStudent = new Student(
                newStudentDTO.getFirstName(),
                newStudentDTO.getLastName(),
                null, newStudentDTO.getDateOfBirth(), newStudentDTO.getCountry(), newStudentDTO.getPhone(),
                newStudentDTO.getEmail(), encoder.encode(newStudentDTO.getPassword()));
        // Add student through StudentService
        studentService.addStudent(newStudent);

        // Return response entity with new user and CREATED status
        return new ResponseEntity<>(Optional.ofNullable(newStudent), HttpStatus.CREATED);

    }

    @GetMapping("/user/{id}")
    public Optional<Student> getStudentbyId(@PathVariable(value = "id") Integer Id) {

        // Return a user with the specified ID
        return studentService.findByID(Id);

    }

    @DeleteMapping("user/{id}")
    public String deleteStudent(@PathVariable(value = "id") Integer Id) {

        // Delete student by using their ID
        studentService.deleteStudent(Id);
        return "Student Deleted";

    }

    @GetMapping("/user/findByEmail")
    public Optional<Student> getUserByEmail(@RequestParam String email) {

        return Optional.ofNullable(studentService.findByEmail(email));

    }

    @GetMapping("/user/getByEmail")
    public Student getByEmail(@RequestParam String email) {

        return (studentService.findByEmail(email));

    }

    // @RequestMapping(value = "/username", method = RequestMethod.GET)
    // @ResponseBody
    // public String currentUserName(Principal principal) {
    // return principal.getName();
    // }

}
