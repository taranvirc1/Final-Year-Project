package CS2001.Group47.ELearning_Platform.dto;

import CS2001.Group47.ELearning_Platform.model.Subscriptions;

public class SubscribeDTO {
    String email;

    private int subId;
    private	int threadId;

    public SubscribeDTO(String email, int subId, int threadId) {
        this.email = email;
        this.subId = subId;
        this.threadId = threadId;
    }


    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getSubId() {
        return subId;
    }

    public void setSubId(int subId) {
        this.subId = subId;
    }

    public int getThreadId() {
        return threadId;
    }

    public void setThreadId(int threadId) {
        this.threadId = threadId;
    }

    @Override
    public String toString() {
        return "SubscribeDTO [email=" + email + ", subId=" + subId + ", threadId=" + threadId + "]";
    }

    


}
