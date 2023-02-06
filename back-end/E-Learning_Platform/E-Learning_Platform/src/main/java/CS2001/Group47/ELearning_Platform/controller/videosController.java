package CS2001.Group47.ELearning_Platform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.service.VideosService;




@RestController
public class videosController {
    
    @Autowired
    VideosService videosService;




}
