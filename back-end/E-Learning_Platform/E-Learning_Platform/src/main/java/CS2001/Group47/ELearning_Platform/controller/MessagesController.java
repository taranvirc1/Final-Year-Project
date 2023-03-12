package CS2001.Group47.ELearning_Platform.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.dto.CreateThreadDTO;
import CS2001.Group47.ELearning_Platform.dto.NewMessageDTO;
import CS2001.Group47.ELearning_Platform.model.Messages;
import CS2001.Group47.ELearning_Platform.model.Threads;
import CS2001.Group47.ELearning_Platform.repository.MessagesRepository;
import CS2001.Group47.ELearning_Platform.service.MessageService;
import CS2001.Group47.ELearning_Platform.service.ThreadService;
@RestController
public class MessagesController {
    @Autowired
    MessageService messageService;
    @Autowired
    ThreadService threadService;
    @Autowired
    MessagesRepository messagesRepository;
        
    @PostMapping("/messages/create")
    public ResponseEntity<Optional<Messages>> addThread(@RequestBody NewMessageDTO newMessageDTO) {
        
        Threads threads = threadService.findByID(newMessageDTO.getThreadId());
        // Else create a thread with DTO
        Messages newMessage = new Messages(
            newMessageDTO.getMessage(),
            newMessageDTO.getMlikes(), threads);
        // Add thread through ThreadService
        messageService.addMessage(newMessage);

        // Return response entity with new thread and CREATED status
        return new ResponseEntity<>(Optional.ofNullable(newMessage), HttpStatus.CREATED);

    }

    @RequestMapping("/messages/{threadId}")
    public Iterable<Messages>  getMessages( @PathVariable("threadId") Integer threadId) {
    return messagesRepository.findByThreads_ThreadId(threadId) ;
}
}
