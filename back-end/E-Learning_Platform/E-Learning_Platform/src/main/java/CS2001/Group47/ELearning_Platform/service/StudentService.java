package CS2001.Group47.ELearning_Platform.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.exception.ResourceNotFoundException;
import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.repository.StudentRepository;

@Service
public class StudentService {
	@Autowired
    StudentRepository studentRepository;
	
	public StudentService() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public List<Student> getStudents() {
		return (List<Student>) studentRepository.findAll();
	}

	
	public void addStudent(Student newUser) {
		studentRepository.save(newUser);
	}
	
	public Optional<Student> findByID(Integer id) {
		 return studentRepository.findById(id);
	}
	
	public void deleteStudent(Integer id) {
		Student student = studentRepository.findById(id)
				  .orElseThrow(() -> new ResourceNotFoundException("Student", "id", id));
		studentRepository.delete(student);
	}
	
	public Student findByEmail(String email) {
		return studentRepository.findByEmail(email);
	}

}
