/**
 * Ticketing System for a Public Transport Network
 * 
 * @author 2021S2_REG_WE_02
 * 
 * @Version 1.0
 * 
 */
package com.example.demo.service.Impl;

import com.example.demo.model.TimeTable;
import com.example.demo.repository.ITimeTableRepository;
import com.example.demo.service.TimeTableService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TimeTableServiceImpl implements TimeTableService{
	@Autowired
	private ITimeTableRepository iTimeTableRepository;
	
	//Add Timetable
	@Override
	public TimeTable addTimeTable(TimeTable timeTable) {
		return iTimeTableRepository.save(timeTable);
	}

	//Get all Timetable
	@Override
	public List<TimeTable> getAllTimeTable() {
		return iTimeTableRepository.findAll();
	}

}