package CS2001.Group47.ELearning_Platform.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.model.Messages;
import CS2001.Group47.ELearning_Platform.service.MessageService;


@RestController
public class MessageController {
    @Autowired
    MessageService messageService;

    @GetMapping("/thread")
    public List<Messages> getAllThreads() {

        return messageService.getThreads();
    
}
    @PostMapping("/thread/{id}")
    public ResponseEntity<Optional<Messages>> addMessage(@RequestBody CreateThreadDTO newThreadDTO) {
        // CreateThreadDTO has null attributes
        if (newThreadDTO.getThreadName() == null) {
            // This is for testing purposes
            System.out.println(newThreadDTO.toString());

            // Return response entity with error and BAD REQUEST status
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);

        }

        // Else create a thread with DTO
        Messages newThread = new Threads(
                newThreadDTO.getThreadName(),
                newThreadDTO.getfTags());
        // Add thread through ThreadService
        messageService.addThread(newThread);

        // Return response entity with new thread and CREATED status
        return new ResponseEntity<>(Optional.ofNullable(newThread), HttpStatus.CREATED);

    }
}
