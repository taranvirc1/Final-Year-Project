package CS2001.Group47.ELearning_Platform.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.model.VideoCategory;
import CS2001.Group47.ELearning_Platform.model.Videos;
import CS2001.Group47.ELearning_Platform.repository.VideoCategoryRepository;
import CS2001.Group47.ELearning_Platform.repository.VideosRepository;
@RestController
public class videoCategoryController {
    @Autowired
VideosRepository videosRepository;
@Autowired

 VideoCategoryRepository videoCategoryRepository;
VideoCategory videoCategory;
    
    @GetMapping("/categories")
public List <VideoCategory> getCategory (){
 return  videoCategoryRepository.findAll();



}

}

