/**
 * Ticketing System for a Public Transport Network
 * 
 * @author 2021S2_REG_WE_02
 * 
 * @Version 1.0
 * 
 */
package com.example.demo.model;

import java.time.LocalDate;
import java.time.ZoneId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "payment")
public class Payment {
	@Id
	private String paymentId;
	private int cardId;
	private String paymentType;
	private double paymentAmount;
	private LocalDate paymentDate;
	
	public Payment() {
		super();
	}
	public Payment(int cardId, String paymentType, double paymentAmount, LocalDate paymentDate) {
		super();
		this.cardId = cardId;
		this.paymentType = paymentType;
		this.paymentAmount = paymentAmount;
		this.paymentDate = LocalDate.now(ZoneId.of("UTC+05:30"));
	}
	public String getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}
	public int getCardId() {
		return cardId;
	}
	public void setCardId(int cardId) {
		this.cardId = cardId;
	}
	public String getPaymentType() {
		return paymentType;
	}
	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}
	public double getPaymentAmount() {
		return paymentAmount;
	}
	public void setPaymentAmount(double paymentAmount) {
		this.paymentAmount = paymentAmount;
	}
	public LocalDate getPaymentDate() {
		return LocalDate.now(ZoneId.of("UTC+05:30"));
	}
	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
	}
	
	
}
	