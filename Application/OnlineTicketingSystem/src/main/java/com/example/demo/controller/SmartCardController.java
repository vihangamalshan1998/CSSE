package com.example.demo.controller;

import com.example.demo.model.Payment;
import com.example.demo.model.PaymentList;
import com.example.demo.model.SmartCard;
import com.example.demo.service.PaymentService;
import com.example.demo.service.SmartCardService;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/smartCard")
public class SmartCardController {
	
	@Autowired
	SmartCardService smartCardService;
	
	@Autowired
	PaymentService paymentService;

	//Add SmartCard Details
	@PostMapping("/add")
	public SmartCard addDetails(@RequestBody SmartCard smartCard){
		return smartCardService.addDetails(smartCard);
	}

	//Check relevant Smart card details by card ID
	@GetMapping("/checkSmartCardId/{cardId}")
	public Boolean checkCardId(@PathVariable int cardId){
		return smartCardService.checkCardId(cardId)!= null ? true : false;
	}

	//Get relevant smart card details by card ID
	@GetMapping("/checkSmartCard/{cardId}")
	public SmartCard cardDetails(@PathVariable int cardId){
		return smartCardService.checkCardId(cardId);
	}
	
	//Recharge Smart Card
	@PostMapping("/getCard/{cardId}/{cardAmount}")
	public Boolean rechargeCard(@PathVariable int cardId,@PathVariable double cardAmount){
		SmartCard card = smartCardService.getCardDetails(cardId);
		card.setCardAmount(card.getCardAmount()+cardAmount);
		smartCardService.updateCardDetails(card);
		return true; 
	}

	//Get list of payments for Card ID
	//Singleton Pattern is used
	@GetMapping("getCardPayments/{cardId}")
	public PaymentList AllPayments(@PathVariable int cardId) {
		List<Payment> paymentList = paymentService.getAllPayments();
		List<Payment> selectedPayments = new ArrayList<Payment>();
		for(Payment p : paymentList) {
			if(p.getCardId() == cardId) {
				selectedPayments.add(p);
			}
		}
		PaymentList paymentList2 = PaymentList.getInstance();
		paymentList2.setCardId(cardId);
		paymentList2.setPaymentList(selectedPayments);
		paymentList2.setPrintedDate(LocalDate.now(ZoneId.of("UTC+05:30")));
		return paymentList2;
	}
}
