package CS2001.Group47.ELearning_Platform.repository;

import org.springframework.stereotype.Repository;

import CS2001.Group47.ELearning_Platform.model.Rate_Review;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository

public interface Rate_ReviewRepository extends JpaRepository<Rate_Review, Integer> {
    List<Rate_Review> findAllByOrderByRatingStarsAsc();
    Rate_Review findByStudents_Email(String email);
}
