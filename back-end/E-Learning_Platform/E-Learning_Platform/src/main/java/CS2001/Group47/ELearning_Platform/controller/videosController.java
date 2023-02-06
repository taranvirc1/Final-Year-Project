package CS2001.Group47.ELearning_Platform.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import CS2001.Group47.ELearning_Platform.model.Videos;

import CS2001.Group47.ELearning_Platform.service.VideosService;




@RestController
public class videosController {
    
    @Autowired
    VideosService videosService;
    

    @GetMapping("/url/{courseID}/{videoName}")
    public List<Videos> getURl(@PathVariable Integer courseID, String videoName){
     return videosService.getURl(courseID, videoName);
    }



}
