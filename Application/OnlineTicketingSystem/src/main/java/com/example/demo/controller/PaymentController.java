/**
 * Ticketing System for a Public Transport Network
 * 
 * @author 2021S2_REG_WE_02
 * 
 * @Version 1.0
 * 
 */
package com.example.demo.controller;

import com.example.demo.model.Payment;
import com.example.demo.model.Receipt;
import com.example.demo.model.SmartCard;
import com.example.demo.service.PaymentService;
import com.example.demo.service.RouteService;
import com.example.demo.service.SmartCardService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
@RequestMapping("/payment")
public class PaymentController {
	
	@Autowired
	PaymentService paymentService;

	@Autowired
	SmartCardService smartCardService;

	@Autowired
	RouteService routeService;

	@Autowired
	private MongoTemplate mongoTemplate;

	//Mongo Template
	@Autowired
	public void setMongoTemplate(MongoTemplate mongoTemplate) {
		this.mongoTemplate = mongoTemplate;
	}

	//Add Payment
	@PostMapping("/add")
	public Boolean addPayment(@RequestBody Payment payment){
		SmartCard smartCard = smartCardService.getCardDetails(payment.getCardId());
		if(smartCard.getCardAmount() >= payment.getPaymentAmount()) {
			paymentService.addPayment(payment);
			smartCard.setCardAmount(smartCard.getCardAmount() - payment.getPaymentAmount());
			smartCardService.updateCardDetails(smartCard);
			return true;
		}
		return false;
	}

	//Get all payment Details
	@GetMapping("/getAllPayments")
	public List<Payment> getAllPayments(){
		return paymentService.getAllPayments();
	}

	//Make Payment after checking the card balance
	@PostMapping("/getPayment/{cardId}/{routeId}")
	public Receipt getPayment(@PathVariable int cardId,@PathVariable int routeId,@RequestBody Payment payment){
		SmartCard smartCard = smartCardService.getCardDetails(cardId);
		Receipt receipt = new Receipt(routeService.getRouteDetails(routeId));
		if(smartCard.getCardAmount() >= receipt.getTotalAmount()) {
			payment.setPaymentAmount(receipt.getTotalAmount());
			paymentService.addPayment(payment);
			smartCard.setCardAmount(smartCard.getCardAmount() - receipt.getTotalAmount());
			smartCardService.updateCardDetails(smartCard);
			return receipt;
		}
		return null;
	}

	//Update Smart Card
	@PutMapping("/update")
	public Boolean rechargeCard(@RequestBody SmartCard smartCard){
		SmartCard card = smartCardService.getCardDetails(smartCard.getCardId());
		card.setCardAmount(card.getCardAmount()+smartCard.getCardAmount());
		smartCardService.updateCardDetails(card);
		return true; 
	}
	

	//Get All Card Details
	@GetMapping("/getAllByType/{type}")
	public List<Payment> findByType(@PathVariable String type){
		Query query = new Query();
		query.addCriteria(Criteria.where("paymentType").is(type));
		return mongoTemplate.find(query, Payment.class);
	}
	
	//Get All Payments by ID and Type
	@GetMapping("/getAllByTypeAndID/{Id}/{type}")
	public List<Payment> findByTypeAndID(@PathVariable int Id,@PathVariable String type){
		Query query = new Query();
		query.addCriteria(Criteria.where("cardId").is(Id)).addCriteria(Criteria.where("paymentType").is(type));
		return mongoTemplate.find(query, Payment.class);
	}
}
