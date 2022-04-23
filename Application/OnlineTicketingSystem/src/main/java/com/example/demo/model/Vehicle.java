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

public class Vehicle {
	@Id
	private String vehicleRegNumber;
	private int numberOfSeats;
	private String vehicleType;
	private String vehicleStatus;
	private Route route;
	private TimeTable timeTable;
	
	public Vehicle() {}
	
	public Vehicle(String vehicleRegNumber, int numberOfSeats, String vehicleType,
			String vehicleStatus, Route route,TimeTable timeTable) {
		super();
		this.vehicleRegNumber = vehicleRegNumber;
		this.numberOfSeats = numberOfSeats;
		this.vehicleType = vehicleType;
		this.vehicleStatus = vehicleStatus;
		this.route = route;
		this.timeTable = timeTable;
	}

	public Route getRoute() {
		return route;
	}

	public void setRoute(Route route) {
		this.route = route;
	}

	public TimeTable getTimeTable() {
		return timeTable;
	}

	public void setTimeTable(TimeTable timeTable) {
		this.timeTable = timeTable;
	}

	public String getVehicleRegNumber() {
		return vehicleRegNumber;
	}

	public void setVehicleRegNumber(String vehicleRegNumber) {
		this.vehicleRegNumber = vehicleRegNumber;
	}

	public int getNumberOfSeats() {
		return numberOfSeats;
	}

	public void setNumberOfSeats(int numberOfSeats) {
		this.numberOfSeats = numberOfSeats;
	}

	public String getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}

	public String getVehicleStatus() {
		return vehicleStatus;
	}

	public void setVehicleStatus(String vehicleStatus) {
		this.vehicleStatus = vehicleStatus;
	}

}