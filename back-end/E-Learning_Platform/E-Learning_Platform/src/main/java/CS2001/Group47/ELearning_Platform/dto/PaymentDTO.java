package CS2001.Group47.ELearning_Platform.dto;

public class PaymentDTO {

    String dAmount;
    String billingFirstName;
    String billingLastName;
    String cardNo;
    String cvv;
    String cardType;
    String expiryDate;
    String country;
    String city;
    String address;
    String postCode;
    
    public PaymentDTO(String dAmount, String billingFirstName, String billingLastName, String cardNo, String cvv, String cardType, String expiryDate, String country, String city, String address, String postCode) {
        super();
        this.dAmount = dAmount;
        this.billingFirstName = billingFirstName;
        this.billingLastName = billingLastName;
        this.cardNo = cardNo;
        this.cvv = cvv;
        this.cardType = cardType;
        this.expiryDate = expiryDate;
        this.country = country;
        this.city = city;
        this.address = address;
        this.postCode = postCode;
    }

    public String getDAmount() {
        return dAmount;
    }
    
    public void setDAmount(String dAmount) {
        this.dAmount = dAmount;
    }
    
    
    public String getBillingFirstName() {
        return billingFirstName;
    }
    
    public void setBillingFirstName(String billingFirstName) {
        this.billingFirstName = billingFirstName;
    }
    
    public String getBillingLastName() {
        return billingLastName;
    }
    
    public void setBillingLastName(String billingLastName) {
        this.billingLastName = billingLastName;
    }
    
    public String getCardNo() {
        return cardNo;
    }
    
    public void setCardNo(String cardNo) {
        this.cardNo = cardNo;
    }
    
    public String getCVV() {
        return cvv;
    }
    
    public void setCVV(String cvv) {
        this.cvv = cvv;
    }
    
    public String getCardType() {
        return cardType;
    }
    
    public void setCardType(String cardType) {
        this.cardType = cardType;
    }
    
    public String getExpiryDate() {
        return expiryDate;
    }
    
    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }
    
    public String getCountry() {
        return country;
    }
    
    public void setCountry(String country) {
        this.country = country;
    }
    
    public String getCity() {
        return city;
    }
    
    public void setCity(String city) {
        this.city = city;
    }
    
    public String getAddress() {
        return address;
    }
    
    public void setAddress(String address) {
        this.address = address;
    }
    
    public String getPostCode() {
        return postCode;
    }
    
    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }
    
    @Override
    public String toString() {
        return "PaymentDTO [dAmount=" + dAmount + ", billingFirstName=" + billingFirstName + ", billingLastName=" + bLastName + ", cardNo=" + cardNo + ", cvv=" + cvv + ", cardType=" + cardType + ", expiryDate=" + expiryDate + ", country=" + country + ", city=" + city + ", address=" + address + ", postCode=" + postCode + "]";
    }
}
