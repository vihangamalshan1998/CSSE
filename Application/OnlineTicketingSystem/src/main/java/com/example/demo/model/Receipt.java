package com.example.demo.model;

public class Receipt {
	
	private double totalAmount;
	private String startLocation;
	private String endLocation;
	private float amountOfKM;
	private static Receipt instance = null;
	
	private Receipt() {}
	
	//Singleton pattern
		public static Receipt getInstance() {
			if(instance == null) {
				synchronized (Receipt.class) {
					if(instance == null) {
						instance =  new Receipt();
					}
				}
			}
			return instance;
		}
		
	public Receipt(Route routeDetails) {
		// TODO Auto-generated constructor stub
	}
	public double getTotalAmount() {
		return amountOfKM * 5;
	}
	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}
	public String getStartLocation() {
		return startLocation;
	}
	public void setStartLocation(String startLocation) {
		this.startLocation = startLocation;
	}
	public String getEndLocation() {
		return endLocation;
	}
	public void setEndLocation(String endLocation) {
		this.endLocation = endLocation;
	}
	public float getAmountOfKM() {
		return amountOfKM;
	}
	public void setAmountOfKM(float amountOfKM) {
		this.amountOfKM = amountOfKM;
	}
	
}
