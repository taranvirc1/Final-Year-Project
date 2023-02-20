package CS2001.Group47.ELearning_Platform.service;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import CS2001.Group47.ELearning_Platform.model.Donator;
import CS2001.Group47.ELearning_Platform.repository.DonatorRepository;


@Service
public class DonatorService {


   @Autowired
   private DonatorRepository donatorRepository;


   public Donator save(Donator donator) {
       return donatorRepository.save(donator);
   }


   public List<Donator> findAll() {
       return donatorRepository.findAll();
   }


   public Donator findById(Integer id) {
       return donatorRepository.findById(id).orElse(null);
   }
}
