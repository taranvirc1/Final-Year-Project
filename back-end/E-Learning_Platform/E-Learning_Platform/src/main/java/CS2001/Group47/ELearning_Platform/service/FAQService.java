package CS2001.Group47.ELearning_Platform.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.model.FAQ;
import CS2001.Group47.ELearning_Platform.repository.FAQRepository;


@Service
public class FAQService{
  
    List<FAQ> getAllFaqs()

}
@Service
class FAQServiceImpl implements FAQService {
  
    //@Autowired
    //FAQRepository faqRepository;

    public List<FAQ> findFAQ(FAQ faq){
        return faqRepository.findFAQ();
    }



   


}
