package CS2001.Group47.ELearning_Platform.dto;




import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;




import CS2001.Group47.ELearning_Platform.model.Payment;




public class PaymentDTO {




  int dAmount;
  String billingFirstName;
  String billingLastName;
  String cardNo;
  String cvv;
  String cardType;
  String expiryDate;
  String country;
  String city;
  String address;
  String address2;
  String postCode;




  public PaymentDTO() {
  }




  public PaymentDTO(Payment payment) {
      this.dAmount = payment.getDAmount();
      this.billingFirstName = payment.getBillingFirstName();
      this.billingLastName = payment.getBillingLastName();
      this.cardNo = payment.getCardNo();
      this.cvv = payment.getCvv();
      this.cardType = payment.getCardType();
      this.expiryDate = payment.getExpiryDate();
      this.country = payment.getCountry();
      this.city = payment.getCity();
      this.address = payment.getAddress();
      this.address2 = payment.getAddress2();
      this.postCode = payment.getPostCode();
  }




  public int getDAmount() {
      return dAmount;
  }




  public void setDAmount(int dAmount) {
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




  public String getCvv() {
      return cvv;
  }




  public void setCvv(String cvv) {
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
  public String getAddress2() {
      return address2;
  }




  public void setAddress2(String address2) {
      this.address2 = address2;
  }




  public String getPostCode() {
      return postCode;
  }




  public void setPostCode(String postCode) {
      this.postCode = postCode;
  }




  public Payment toPayment() {
      Payment payment = new Payment();
      payment.setDAmount(dAmount);
      payment.setBillingFirstName(billingFirstName);
      payment.setBillingLastName(billingLastName);
      payment.setCardNo(cardNo);
      payment.setCvv(cvv);
      payment.setCardType(cardType);
      payment.setExpiryDate(expiryDate);
      payment.setCountry(country);
      payment.setCity(city);
      payment.setAddress(address);
      payment.setAddress2(address2);
      payment.setPostCode(postCode);
      return payment;
  }




  @Override
public String toString() {
  return "PaymentDTO [dAmount=" + dAmount + ", billingFirstName=" + billingFirstName + ", billingLastName="
          + billingLastName + ", cardNo=" + cardNo + ", cvv=" + cvv + ", cardType=" + cardType + ", expiryDate="
          + expiryDate + ", country=" + country + ", city=" + city + ", address=" + address + ", address2=" + address2 + "postCode=" + postCode
          + "]";
}




}
