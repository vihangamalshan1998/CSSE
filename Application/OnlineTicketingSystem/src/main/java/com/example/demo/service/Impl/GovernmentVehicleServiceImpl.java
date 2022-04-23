/**
 * Ticketing System for a Public Transport Network
 * 
 * @author 2021S2_REG_WE_02
 * 
 * @Version 1.0
 * 
 */

package com.example.demo.service.Impl;

import com.example.demo.model.GovernmentVehicle;
import com.example.demo.model.Vehicle;
import com.example.demo.repository.IGovernmentVehicleRepository;
import com.example.demo.service.GovernmentVehicleService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class GovernmentVehicleServiceImpl implements GovernmentVehicleService{
	
	@Autowired
	private IGovernmentVehicleRepository iGovernmentVehicleRepository;

	public GovernmentVehicleServiceImpl() {}

	//Add Vehicle
	@Override
	public GovernmentVehicle addVehicle(GovernmentVehicle vehicle) {
		if(vehicle.getNumberOfSeats() == 0) {
			return null;
		}else {
			return iGovernmentVehicleRepository.save(vehicle);
		}
	}

	//Get All Vehicles
	@Override
	public List<GovernmentVehicle> getAllVehicles() {
		return iGovernmentVehicleRepository.findAll();
	}

	//Delete Vehicle
	@Override
	public void deleteVehicle(String vehicleId) {
		iGovernmentVehicleRepository.deleteById(vehicleId);
	}

	//Get Vehicle By ID
	@Override
	public Vehicle getVehicleById(String id) {
		return iGovernmentVehicleRepository.findById(id).get();
	}

}