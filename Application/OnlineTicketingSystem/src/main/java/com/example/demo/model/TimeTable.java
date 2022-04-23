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

@Document(collection = "timetable")
public class TimeTable {
	@Id
	private String timeTableId;
	private String timeTableName;
	private String discription;
	private String araivalTime;
	private String depatureTime;
	
	public TimeTable() {}
	
	public TimeTable(String timeTableName, String discription, String araivalTime,
			String depatureTime) {
		super();
		this.timeTableName = timeTableName;
		this.discription = discription;
		this.araivalTime = araivalTime;
		this.depatureTime = depatureTime;
	}

	public String getAraivalTime() {
		return araivalTime;
	}

	public void setAraivalTime(String araivalTime) {
		this.araivalTime = araivalTime;
	}

	public String getDepatureTime() {
		return depatureTime;
	}

	public void setDepatureTime(String depatureTime) {
		this.depatureTime = depatureTime;
	}

	public String getTimeTableId() {
		return timeTableId;
	}

	public String getTimeTableName() {
		return timeTableName;
	}

	public void setTimeTableName(String timeTableName) {
		this.timeTableName = timeTableName;
	}

	public String getDiscription() {
		return discription;
	}

	public void setDiscription(String discription) {
		this.discription = discription;
	}
	
	
}