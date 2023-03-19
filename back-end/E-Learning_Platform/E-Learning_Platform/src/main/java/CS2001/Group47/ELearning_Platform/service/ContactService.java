package CS2001.Group47.ELearning_Platform.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.model.ContactInfo;
import CS2001.Group47.ELearning_Platform.model.ContactRepository;


@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public Contact saveContact(ContactDTO contactDTO) {
        Contact contact = new Contact();
        contact.setFirstName(contactDTO.getFirstName());
        contact.setLastName(contactDTO.getLastName());
        contact.setEmail(contactDTO.getEmail());
        contact.setPhone(contactDTO.getPhone());
        contact.setBriefMessage(contactDTO.getBriefMessage());
        return contactRepository.save(contact);
    }

    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    public Optional<Contact> getContactById(Long id) {
        return contactRepository.findById(id);
    }

    public void deleteContactById(Long id) {
        contactRepository.deleteById(id);
    }
}