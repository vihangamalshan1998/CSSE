package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "governmentVehicle")
public class GovernmentVehicle extends Vehicle{
	private String depoName = "";
	private String depoContactNumber = "";
	
	public GovernmentVehicle() {}
	public GovernmentVehicle(String vehicleRegNumber, int numberOfSeats, String vehicleType, String vehicleStatus,
			Route route, TimeTable timeTable) {
		super(vehicleRegNumber, numberOfSeats, vehicleType, vehicleStatus, route, timeTable);
	}

	public String getDepoName() {
		return depoName;
	}

	public void setDepoName(String depoName) {
		this.depoName = depoName;
	}

	public String getDepoContactNumber() {
		return depoContactNumber;
	}

	public void setDepoContactNumber(String depoContactNumber) {
		this.depoContactNumber = depoContactNumber;
	}
	
}