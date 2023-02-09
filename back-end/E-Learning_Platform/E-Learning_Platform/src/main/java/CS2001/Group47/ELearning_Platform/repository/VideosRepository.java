package CS2001.Group47.ELearning_Platform.repository;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import CS2001.Group47.ELearning_Platform.model.Videos;

@Repository
public interface VideosRepository extends CrudRepository<Videos, Integer> {
   List<Videos> findAllByOrderByVideoNameAsc();

}
