/**
 * Ticketing System for a Public Transport Network
 * 
 * @author 2021S2_REG_WE_02
 * 
 * @Version 1.0
 * 
 */
package com.example.demo.service;

import com.example.demo.model.TimeTable;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public interface TimeTableService {
	
	//Add Timetable
	TimeTable addTimeTable(TimeTable timeTable);
	//Get all Timetables
	List<TimeTable> getAllTimeTable();
}