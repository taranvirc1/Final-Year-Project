package CS2001.Group47.ELearning_Platform.dto;

public class ResultDTO {
    private Long id;
    private Integer score;
    private String email; // Change this to email

    public ResultDTO() {
    }

    public ResultDTO(Long id, Integer score, String email) { // Change this to email
        this.id = id;
        this.score = score;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public String getEmail() { // Change this to email
        return email;
    }

    public void setEmail(String email) { // Change this to email
        this.email = email;
    }
}