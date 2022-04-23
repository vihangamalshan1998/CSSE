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

@Document(collection = "route")
public class Route {
	@Id
	private Integer routeId;
	private String startLocation;
	private String endLocation;
	private float amountOfKM;
	private int vehicleId;
	public Route(Integer routeId, String startLocation, String endLocation, float amountOfKM, int vehicleId) {
		super();
		this.routeId = routeId;
		this.startLocation = startLocation;
		this.endLocation = endLocation;
		this.amountOfKM = amountOfKM;
		this.vehicleId = vehicleId;
	}
	public Integer getRouteId() {
		return routeId;
	}
	public void setRouteId(Integer routeId) {
		this.routeId = routeId;
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
	public int getVehicleId() {
		return vehicleId;
	}
	public void setVehicleId(int vehicleId) {
		this.vehicleId = vehicleId;
	}
	
	

}
