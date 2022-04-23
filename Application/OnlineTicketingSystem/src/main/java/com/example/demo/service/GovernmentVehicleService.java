/**
 * Ticketing System for a Public Transport Network
 * 
 * @author 2021S2_REG_WE_02
 * 
 * @Version 1.0
 * 
 */
package com.example.demo.service;

import com.example.demo.model.GovernmentVehicle;
import com.example.demo.model.Vehicle;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public interface GovernmentVehicleService extends IService{
	//Add vehicle
	GovernmentVehicle addVehicle(GovernmentVehicle vehicle);
	
	//Get all Vehicles
	List<GovernmentVehicle> getAllVehicles();
	
	//Get Vehicle by ID
	Vehicle getVehicleById(String id);
}