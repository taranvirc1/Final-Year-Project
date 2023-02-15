package CS2001.Group47.ELearning_Platform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.model.Rate_Review;
import CS2001.Group47.ELearning_Platform.repository.Rate_ReviewRepository;

@Service

public class Rate_ReviewService {
    @Autowired
    Rate_ReviewRepository reviewRepository;

	public void addReview(Rate_Review newReview) {
		reviewRepository.save(newReview);
	}

}
