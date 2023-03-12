package CS2001.Group47.ELearning_Platform.dto;



public class NewMessageDTO {
    String message;
    int mlikes;
    int threadId;
    
    public NewMessageDTO(String message, int mlikes, int threadId) {
        super();
        this.message = message;
        this.mlikes = mlikes;
        this.threadId = threadId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getMlikes() {
        return mlikes;
    }

    public void setMlikes(int mlikes) {
        this.mlikes = mlikes;
    }

    public int getThreadId() {
        return threadId;
    }

    public void setThreadId(int threadId) {
        this.threadId = threadId;
    }

    @Override
    public String toString() {
        return "NewMessageDTO [message=" + message + ", mlikes=" + mlikes + ", threadId=" + threadId + "]";
    }
    
    
}
