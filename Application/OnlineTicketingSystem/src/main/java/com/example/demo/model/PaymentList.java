package com.example.demo.model;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

public class PaymentList {
	private int CardId;
	private List<Payment> paymentList;
	private LocalDate printedDate;
	private static PaymentList instance = null;
	
	private PaymentList() {
	
	}

	//Singleton pattern
	public static PaymentList getInstance() {
		if(instance == null) {
			synchronized (PaymentList.class) {
				if(instance == null) {
					instance =  new PaymentList();
				}
			}
		}
		return instance;
	}

	public int getCardId() {
		return CardId;
	}

	public void setCardId(int cardId) {
		CardId = cardId;
	}

	public List<Payment> getPaymentList() {
		return paymentList;
	}

	public void setPaymentList(List<Payment> paymentList) {
		this.paymentList = paymentList;
	}

	public LocalDate getPrintedDate() {
		return LocalDate.now(ZoneId.of("UTC+05:30"));
	}

	public void setPrintedDate(LocalDate printedDate) {
		this.printedDate = printedDate;
	}


}
