package CS2001.Group47.ELearning_Platform.repository;

import org.springframework.stereotype.Repository;

import CS2001.Group47.ELearning_Platform.model.Threads;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ThreadsRepository extends JpaRepository<Threads, Integer> {

	Threads findByThreadName(String threadName);

	Threads findByfTags(String fTags);
    
    Threads findByfDateCreated(Date fDateCreated);

	Threads findByStudents_Email(String email);

}

