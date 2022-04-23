/**
 /**
 * Ticketing System for a Public Transport Network
 * 
 * @author 2021S2_REG_WE_02
 * 
 * @Version 1.0
 * 
 */
package com.example.demo.service.Impl;

import com.example.demo.model.Payment;
import com.example.demo.repository.IPaymentRepository;
import com.example.demo.service.PaymentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService{
	
	@Autowired
	private IPaymentRepository paymentRepository;

	//Add Payment
	@Override
	public Payment addPayment(Payment payment) {
		return paymentRepository.save(payment);
	}

	//Get All Payments
	@Override
	public List<Payment> getAllPayments() {
		return paymentRepository.findAll();
	}


}
