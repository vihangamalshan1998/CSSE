package com.example.demo.service;

import com.example.demo.model.SmartCard;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public interface SmartCardService {
	//Check Card ID
	SmartCard checkCardId(int cardId);
	//Add Card Details
	SmartCard addDetails(SmartCard smartCard);
	//Get Card Details
	SmartCard getCardDetails(int cardId);
	//Update Card Details
	SmartCard updateCardDetails(SmartCard smartCard);

}
