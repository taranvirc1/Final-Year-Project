package CS2001.Group47.ELearning_Platform.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import CS2001.Group47.ELearning_Platform.model.Videos;
import CS2001.Group47.ELearning_Platform.repository.VideosRepository;
import CS2001.Group47.ELearning_Platform.service.VideosService;




@RestController
public class videosController {
    
    @Autowired
    private VideosRepository videosRepository;
   
       /* public Iterable<Videos> getVideos() {
            return videosRepository.findAll();

    
        } */ 



        @RequestMapping("/videos")
public Iterable<Videos> getVideos() {
    return videosRepository.findAllByOrderByVideoNameAsc();
}
}

    




