package CS2001.Group47.ELearning_Platform.dto;

public class SubscribeDTO {
    String subEmail;

    private Integer subId;
    private	Integer threadId;

    public SubscribeDTO(String subEmail, Integer subId, Integer threadId) {
        this.subEmail = subEmail;
        this.subId = subId;
        this.threadId = threadId;
    }

    public String getSubEmail() {
        return subEmail;
    }

    public void setSubEmail(String subEmail) {
        this.subEmail = subEmail;
    }

    public Integer getSubId() {
        return subId;
    }

    public void setSubId(Integer subId) {
        this.subId = subId;
    }

    public Integer getThreadId() {
        return threadId;
    }

    public void setThreadId(Integer threadId) {
        this.threadId = threadId;
    }

    @Override
    public String toString() {
        return "SubscribeDTO [subEmail=" + subEmail + ", subId=" + subId + ", threadId=" + threadId + "]";
    }

    


}
