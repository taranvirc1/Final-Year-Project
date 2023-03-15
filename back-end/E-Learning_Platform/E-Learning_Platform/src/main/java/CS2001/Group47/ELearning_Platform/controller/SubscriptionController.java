package CS2001.Group47.ELearning_Platform.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.dto.SubscribeDTO;
import CS2001.Group47.ELearning_Platform.model.Subscriptions;
import CS2001.Group47.ELearning_Platform.model.Threads;
import CS2001.Group47.ELearning_Platform.repository.SubscriptionRepository;
import CS2001.Group47.ELearning_Platform.service.SubscriptionService;
import CS2001.Group47.ELearning_Platform.service.ThreadService;

@RestController
public class SubscriptionController {
    @Autowired
    SubscriptionService subscriptionService;

    @Autowired
    SubscriptionRepository subscriptionRepository;

    @Autowired
    ThreadService threadService;
    
    @PostMapping("/sub/create")
    public ResponseEntity<Optional<Subscriptions>> addThread(@RequestBody SubscribeDTO NewSubDTO) {


        Threads threads = threadService.findByID(NewSubDTO.getThreadId());
        // Else create a thread with DTO
        Subscriptions newSub = new Subscriptions(
            NewSubDTO.getEmail(), threads);
        // Add thread through ThreadService
        subscriptionService.addSub(newSub);

        // Return response entity with new thread and CREATED status
        return new ResponseEntity<>(Optional.ofNullable(newSub), HttpStatus.CREATED);

    }

    @RequestMapping("/getsub/{subEmail}/{threadId}")
    public Iterable<Subscriptions>  getSub( @PathVariable("subEmail") String subEmail, @PathVariable("threadId") Integer threadId) {
        return subscriptionService.findSub(subEmail, threadId) ;
    }

    // @DeleteMapping("deletesub/{subEmail}/{threadId}")

    // public Iterable<Subscriptions>  deleteSub( @PathVariable("subEmail") String subEmail, @PathVariable("threadId") Integer threadId) {
    //     return subscriptionRepository.deleteSub(subEmail, threadId) ;
    // }

}
