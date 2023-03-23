
package CS2001.Group47.ELearning_Platform.controller;

import javax.validation.Valid; // Import the Valid class from the javax.validation package.

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;


import CS2001.Group47.ELearning_Platform.model.FAQ;
import CS2001.Group47.ELearning_Platform.repository.FAQRepository;
import CS2001.Group47.ELearning_Platform.service.FAQService;
import CS2001.Group47.ELearning_Platform.dto.FAQDTO;

@RestController

public class FAQController {

    @Autowired
    FAQService faqService;

    @GetMapping("/faq")
    List<FAQ> getAllFAQ(){
        return FAQRepository.findAll()
    }
    
    
    
}
