package com.example.demo.service.Impl;

import com.example.demo.model.SmartCard;
import com.example.demo.repository.ISmartCardRepository;
import com.example.demo.service.SmartCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SmartCardServiceImpl implements SmartCardService{

	@Autowired
	private ISmartCardRepository smartCardRepository;

	//Check Card ID
	@Override
	public SmartCard checkCardId(int cardId) {
		return smartCardRepository.findById(cardId).orElse(null);
	}

	//Add Card Details
	@Override
	public SmartCard addDetails(SmartCard smartCard) {
		return smartCardRepository.save(smartCard);
	}

	//Get Card Details
	@Override
	public SmartCard getCardDetails(int cardId) {
		return smartCardRepository.findById(cardId).orElse(null);
	}

	//Update Card Details
	@Override
	public SmartCard updateCardDetails(SmartCard smartCard) {
		return smartCardRepository.save(smartCard);
	}

}
