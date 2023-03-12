package CS2001.Group47.ELearning_Platform.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.model.Messages;
import CS2001.Group47.ELearning_Platform.repository.MessagesRepository;

@Service
public class MessageService {
    @Autowired
	MessagesRepository messagesRepository;

    public MessageService() {
		super();
		// TODO Auto-generated constructor stub
	}
    public void addMessage(Messages newMessage) {
		messagesRepository.save(newMessage);
	}


    
}
