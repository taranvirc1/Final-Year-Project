package CS2001.Group47.ELearning_Platform.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import CS2001.Group47.ELearning_Platform.model.FAQ;

@Repository
public interface FAQRepository extends JpaRepository<FAQ, Integer> {

    public List<FAQ> getFAQData();
}

