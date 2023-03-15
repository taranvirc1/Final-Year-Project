package CS2001.Group47.ELearning_Platform.repository;

import org.springframework.stereotype.Repository;

import CS2001.Group47.ELearning_Platform.model.Threads;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ThreadsRepository extends JpaRepository<Threads, Integer> {

	List<Threads> findByThreadNameContaining(String place);

	List<Threads> findByfTagsContaining(String place);
    
    Threads findByfDateCreated(Date fDateCreated);

	Threads findByStudents_Email(String email);

	Threads findByThreadId(Integer id);


}

