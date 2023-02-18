package CS2001.Group47.ELearning_Platform.Utility;

import javax.servlet.http.HttpServletRequest;

public class Utility {
    
    public static String getSiteURL(HttpServletRequest req) {
        String siteURL = req.getRequestURL().toString();
        return siteURL.replace(req.getServletPath(), "");
    }

}
