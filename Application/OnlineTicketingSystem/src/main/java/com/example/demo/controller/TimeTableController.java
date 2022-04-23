/**
 * Ticketing System for a Public Transport Network
 * 
 * @author 2021S2_REG_WE_02
 * 
 * @Version 1.0
 * 
 */
package com.example.demo.controller;

import com.example.demo.model.TimeTable;
import com.example.demo.service.TimeTableService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/timetable")
public class TimeTableController {
	
	@Autowired
	private TimeTableService timeTableService;
	
	//Add New Time Table
	@PostMapping("/add")
	public boolean createTimeTable(@RequestBody TimeTable timeTable) {
		return timeTableService.addTimeTable(timeTable) != null?true:false;
	}
	
	//Get All Time Tables
	@GetMapping("/getAllTimeTables")
	public List<TimeTable> getAllTimeTables(){
		return timeTableService.getAllTimeTable();
	}
}