package CS2001.Group47.ELearning_Platform.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid; // Import the Valid class from the javax.validation package.

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import CS2001.Group47.ELearning_Platform.dto.DonatorDTO;
import CS2001.Group47.ELearning_Platform.dto.PaymentDTO;
import CS2001.Group47.ELearning_Platform.model.Donator;
import CS2001.Group47.ELearning_Platform.model.Payment;
import CS2001.Group47.ELearning_Platform.service.DonatorService;
import CS2001.Group47.ELearning_Platform.service.PaymentService;




@RestController
public class PaymentController {


  @Autowired
  DonatorService donatorService; // Create an instance of DonatorService and inject it into this class.


  @Autowired
  PaymentService paymentService; // Create an instance of PaymentService and inject it into this class.


  @PostMapping("/donators") // Handle POST requests at the "/donators" endpoint.
  public Donator createDonator(@Valid @RequestBody DonatorDTO donatorDTO) {  // Define a method that creates a new Donator.
      return donatorService.save(donatorDTO.toDonator()); // Save the new Donator using the injected DonatorService.
  }




  @PostMapping("/payments") // Handle POST requests at the "/payments" endpoint.
  public Payment createPayment(@Valid @RequestBody PaymentDTO paymentDTO) { // Define a method that creates a new Payment.
      return paymentService.save(paymentDTO.toPayment()); // Save the new Payment using the injected PaymentService.
  }




  @GetMapping("/donators") // Handle GET requests at the "/donators" endpoint.
  public List<DonatorDTO> getAllDonators() { // Define a method that returns all Donators.
      List<Donator> donators = donatorService.findAll(); // Retrieve all Donators using the injected DonatorService.
      return donators.stream() // Convert the List to a Stream.
                     .map(donator -> new DonatorDTO(donator)) // Map each Donator to a DonatorDTO.
                     .collect(Collectors.toList()); // Convert the Stream back to a List and return it.
  }




  @GetMapping("/payments") // Handle GET requests at the "/payments" endpoint.
  public List<PaymentDTO> getAllPayments() { // Define a method that returns all Payments.
      List<Payment> payments = paymentService.findAll(); // Retrieve all Payments using the injected PaymentService.
      return payments.stream() // Convert the List to a Stream.
                     .map(payment -> new PaymentDTO(payment)) // Map each Payment to a PaymentDTO.
                     .collect(Collectors.toList()); // Convert the Stream back to a List and return it.
  }




  @GetMapping("/donators/{id}")
  public ResponseEntity<DonatorDTO> getDonatorById(@PathVariable(value = "id") Integer donatorId) {
      Donator donator = donatorService.findById(donatorId);
      if (donator == null) {
          return ResponseEntity.notFound().build();
      }
      return ResponseEntity.ok().body(new DonatorDTO(donator));
  }




  @GetMapping("/payments/{id}")
  public ResponseEntity<PaymentDTO> getPaymentById(@PathVariable(value = "id") Integer paymentId) {
      Payment payment = paymentService.findById(paymentId);
      if (payment == null) {
          return ResponseEntity.notFound().build();
      }
      return ResponseEntity.ok().body(new PaymentDTO(payment));
  }
}

