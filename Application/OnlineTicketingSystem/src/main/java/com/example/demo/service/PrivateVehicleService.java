/**
 * Ticketing System for a Public Transport Network
 * 
 * @author 2021S2_REG_WE_02
 * 
 * @Version 1.0
 * 
 */
package com.example.demo.service;

import com.example.demo.model.PrivateVehicle;
import com.example.demo.model.Vehicle;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@Transactional
public interface PrivateVehicleService extends IService{
	//Add Vehicle
	PrivateVehicle addVehicle(PrivateVehicle vehicle);
	//Get all Vehicles
	List<PrivateVehicle> getAllVehicles();
	//Get Vehicle by ID
	Vehicle getVehicleById(String id);
}

