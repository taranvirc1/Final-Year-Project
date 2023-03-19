package CS2001.Group47.ELearning_Platform.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import CS2001.Group47.ELearning_Platform.model.ContactInfo;

@Repository
public interface ContactService extends JpaRepository{

  @Repository
    public interface ContactRepository extends JpaRepository<Contact, Interger> {
   // List<Contact> findByEmail(String email);
}

    
}

