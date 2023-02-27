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

import CS2001.Group47.ELearning_Platform.dto.CreateThreadDTO;
import CS2001.Group47.ELearning_Platform.model.Threads;
import CS2001.Group47.ELearning_Platform.service.ThreadService;

@RestController
public class ThreadController {
    @Autowired
    ThreadService threadService;

    @GetMapping("/thread")
    public List<Threads> getAllUsers() {

        return threadService.getThreads();
    
}
    @PostMapping("/thread/create")
    public ResponseEntity<Optional<Threads>> addThread(@RequestBody CreateThreadDTO newThreadDTO) {
        // CreateThreadDTO has null attributes
        if (newThreadDTO.getThreadName() == null || newThreadDTO.getfTags() == null) {
            // This is for testing purposes
            System.out.println(newThreadDTO.toString());

            // Return response entity with error and BAD REQUEST status
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);

        }

        // Else create a thread with DTO
        Threads newThread = new Threads(
                newThreadDTO.getThreadName(),
                newThreadDTO.getfTags());
        // Add thread through ThreadService
        threadService.addThread(newThread);

        // Return response entity with new thread and CREATED status
        return new ResponseEntity<>(Optional.ofNullable(newThread), HttpStatus.CREATED);

    }
}