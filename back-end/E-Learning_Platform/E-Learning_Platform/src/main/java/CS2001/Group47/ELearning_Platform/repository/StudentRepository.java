/**
 * 
 */
package CS2001.Group47.ELearning_Platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import CS2001.Group47.ELearning_Platform.model.Student;

/**
 * @author JohCa
 *
 */
@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
	Student findByEmail(String email);
}
