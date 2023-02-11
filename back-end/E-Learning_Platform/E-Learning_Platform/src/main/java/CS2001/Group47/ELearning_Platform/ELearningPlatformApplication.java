package CS2001.Group47.ELearning_Platform;

import java.util.Arrays;

import org.springframework.context.ApplicationContext;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// import CS2001.Group47.ELearning_Platform.model.Student;
// import CS2001.Group47.ELearning_Platform.model.Courses;
// import CS2001.Group47.ELearning_Platform.model.Videos;
// import CS2001.Group47.ELearning_Platform.repository.CoursesRepository;
// import CS2001.Group47.ELearning_Platform.repository.StudentRepository;
// import CS2001.Group47.ELearning_Platform.repository.VideosRepository;

@SpringBootApplication
@EnableJpaAuditing
public class ELearningPlatformApplication {

	public static void main(String[] args) {
		SpringApplication.run(ELearningPlatformApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
				.allowedOrigins("http://localhost:3000")
				.allowedMethods("GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS")
				.allowCredentials(true);
			}
		};
	}
	// @Autowired 
        // private CoursesRepository coursesrepository;

        // @Autowired 
        // private VideosRepository videosrepository;

		// @Autowired 
        // private StudentRepository studentRepository;
	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
		return args -> {
			/*Courses Java = new Courses("Java");
            Courses Python = new Courses("Mary");
            coursesrepository.save(Java);
			coursesrepository.save(Python);

      
            // Add car object with link to owners and save these to db.
            Videos javaVideos = new Videos("Youtube", "Mustang", Java);
            videosrepository.save(javaVideos);
            Videos pythonVideos = new Videos("Nissan", "Leaf",  Python);
            videosrepository.save(pythonVideos);/* */

			// Student student1 = new Student("Johann", "Cardona", "2001-06-06", "Colombia", "07553266228", "johcar20@hotmail.com", "1234567890");
			// studentRepository.save(student1);

			System.out.println("Let's inspect the beans provided by Spring Boot:");
						String[] beanNames = ctx.getBeanDefinitionNames();
					Arrays.sort(beanNames);
					for (String beanName : beanNames) {
						System.out.println(beanName);
					}
           
		};
	}
	

}
