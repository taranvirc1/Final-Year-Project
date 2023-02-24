package CS2001.Group47.ELearning_Platform.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.vaadin.ui.Image;

import CS2001.Group47.ELearning_Platform.exception.ResourceNotFoundException;
import CS2001.Group47.ELearning_Platform.exception.StudentNotFoundException;
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

	public void updateResetPasswordToken(String token, String email) throws StudentNotFoundException {
		Student student = studentRepository.findByEmail(email);
		if (student != null) {
			student.setResetPasswordToken(token);
			studentRepository.save(student);
		} else {
			throw new StudentNotFoundException("Could not find any student with the email" + email);
		}
	}

	public Student getResetPasswordToken(String token) {
		return studentRepository.findByResetPasswordToken(token);
	}

	public void updatePassword(Student student, String newPassword) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String encodedPassword = encoder.encode(newPassword);
		student.setPassword(encodedPassword);

		student.setResetPasswordToken(null);
		studentRepository.save(student);
	}

	// added by murad here and in student repo as well
	// public Student getStudentbyId(int studentId) {
	// return studentRepository.findByStudentId(studentId);
	// }

	// public Student saveUserProfile(Student userProfile) {
	// return studentRepository.save(userProfile);
	// }

	// public Optional<Student> getUserProfileById(Integer userId) {
	// return studentRepository.findById(userId);
	// }

	// -----

	public void saveUserImage(Integer id, MultipartFile file) throws IOException {
		Student user = studentRepository.findById(id)
				.orElseThrow();

		user.setAvatar(file.getBytes());
		studentRepository.save(user);
	}

	public byte[] getUserImage(Integer id) {
		Student user = studentRepository.findById(id)
				.orElseThrow();

		return user.getAvatar();
	}

	public void saveBio(Integer userId, String bio) {
        Optional<Student> userOptional = studentRepository.findById(userId);
        if (userOptional.isPresent()) {
            Student user = userOptional.get();
            user.setBio(bio);
            studentRepository.save(user);
        } else {
            throw new RuntimeException("User not found");
        }
    }
    
    public String getBio(Integer userId) {
        Optional<Student> userOptional = studentRepository.findById(userId);
        if (userOptional.isPresent()) {
            Student user = userOptional.get();
            return user.getBio();
        } else {
            throw new RuntimeException("User not found");
        }
    }


	public void saveOption(Integer userId, String bio) {
        Optional<Student> userOptional = studentRepository.findById(userId);
        if (userOptional.isPresent()) {
            Student user = userOptional.get();
            user.setOptionValue(bio);
            studentRepository.save(user);
        } else {
            throw new RuntimeException("User not found");
        }
    }
    
    public String getOption(Integer userId) {
        Optional<Student> userOptional = studentRepository.findById(userId);
        if (userOptional.isPresent()) {
            Student user = userOptional.get();
            return user.getOptionValue();
        } else {
            throw new RuntimeException("User not found");
        }
    }
    

}
