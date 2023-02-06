package CS2001.Group47.ELearning_Platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import CS2001.Group47.ELearning_Platform.model.Courses;

@Repository

public interface CoursesRepository extends JpaRepository<Courses, Integer>{
    
}
