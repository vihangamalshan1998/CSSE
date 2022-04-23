/**
 * Ticketing System for a Public Transport Network
 * 
 * @author 2021S2_REG_WE_02
 * 
 * @Version 1.0
 * 
 */
package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "smartcard")
public class SmartCard {
	@Id
	private Integer cardId;
	private String urlCode;
	private String cardType;
	private String userCode;
	private double cardAmount;
	
	public SmartCard() {
		
	}
	public SmartCard(Integer cardId, String urlCode, String cardType, String userCode, double cardAmount) {
		super();
		this.cardId = cardId;
		this.urlCode = urlCode;
		this.cardType = cardType;
		this.userCode = userCode;
		this.cardAmount = cardAmount;
	}
	
	public Integer getCardId() {
		return cardId;
	}
	public void setCardId(Integer cardId) {
		this.cardId = cardId;
	}
	public String getUrlCode() {
		return urlCode;
	}
	public void setUrlCode(String urlCode) {
		this.urlCode = urlCode;
	}
	public String getCardType() {
		return cardType;
	}
	public void setCardType(String cardType) {
		this.cardType = cardType;
	}
	public String getUserCode() {
		return userCode;
	}
	public void setUserCode(String userCode) {
		this.userCode = userCode;
	}
	public double getCardAmount() {
		return cardAmount;
	}
	public void setCardAmount(double cardAmount) {
		this.cardAmount = cardAmount;
	}
	

}
