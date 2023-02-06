package CS2001.Group47.ELearning_Platform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.model.Videos;
import CS2001.Group47.ELearning_Platform.repository.VideosRepository;
import java.util.List;
import java.util.Optional;
@Service
public class VideosService {
    

    @Autowired
   private VideosRepository videosRepository;

   public List<Videos> getVideos() {
    return (List<Videos>) videosRepository.findAll();
   }



}
