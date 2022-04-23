package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "privateVehicle")
public class PrivateVehicle extends Vehicle{
	private String ownerName = "";
	private String ownerContactNumber = "";
	
	public PrivateVehicle() {}
	
	public PrivateVehicle(String vehicleRegNumber, int numberOfSeats, String vehicleType, String vehicleStatus,
			Route route, TimeTable timeTable) {
		super(vehicleRegNumber, numberOfSeats, vehicleType, vehicleStatus, route, timeTable);
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	public String getOwnerContactNumber() {
		return ownerContactNumber;
	}

	public void setOwnerContactNumber(String ownerContactNumber) {
		this.ownerContactNumber = ownerContactNumber;
	}
	
	
}