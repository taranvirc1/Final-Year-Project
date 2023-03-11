package CS2001.Group47.ELearning_Platform.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.model.Threads;
import CS2001.Group47.ELearning_Platform.repository.ThreadsRepository;

@Service
public class ThreadService {
    @Autowired
	ThreadsRepository threadsRepository;

	public ThreadService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<Threads> getThreads() {
		return (List<Threads>) threadsRepository.findAll();
	}

	public void addThread(Threads newThread) {
		threadsRepository.save(newThread);
	}

	public Optional<Threads> findByID(Integer id) {
		return threadsRepository.findById(id);
	}

	public Threads findByEmail(String email) {
		return threadsRepository.findByStudents_Email(email);
	}
}
