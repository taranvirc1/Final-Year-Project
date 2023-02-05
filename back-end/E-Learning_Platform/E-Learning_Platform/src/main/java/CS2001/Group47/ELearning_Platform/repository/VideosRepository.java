package CS2001.Group47.ELearning_Platform.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import CS2001.Group47.ELearning_Platform.model.Videos;

@Repository
public interface VideosRepository extends JpaRepository<Videos, Integer> {
    
}
