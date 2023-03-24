package CS2001.Group47.ELearning_Platform.repository;

import CS2001.Group47.ELearning_Platform.model.Result;
import CS2001.Group47.ELearning_Platform.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {
    List<Result> findByStudent(Student student);
}
