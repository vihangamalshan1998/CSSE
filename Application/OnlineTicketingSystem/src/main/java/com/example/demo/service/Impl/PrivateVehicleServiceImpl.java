/**
 * Ticketing System for a Public Transport Network
 * 
 * @author 2021S2_REG_WE_02
 * 
 * @Version 1.0
 * 
 */
package com.example.demo.service.Impl;

import com.example.demo.model.PrivateVehicle;
import com.example.demo.model.Vehicle;
import com.example.demo.repository.IPrivateVehicleRepository;
import com.example.demo.service.PrivateVehicleService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PrivateVehicleServiceImpl implements PrivateVehicleService{
	@Autowired
	private IPrivateVehicleRepository iVehicleRepository;

	//Add Vehicle
	@Override
	public PrivateVehicle addVehicle(PrivateVehicle vehicle) {
		if(vehicle.getNumberOfSeats() == 0) {
			return null;
		}else {
			return iVehicleRepository.save(vehicle);
		}
	}

	//Get all Vehicles
	@Override
	public List<PrivateVehicle> getAllVehicles() {
		return iVehicleRepository.findAll();
	}

	//Delete Vehicle
	@Override
	public void deleteVehicle(String vehicleId) {
		iVehicleRepository.deleteById(vehicleId);

	}

	//Get Vehicle By ID
	@Override
	public Vehicle getVehicleById(String id) {
		return iVehicleRepository.findById(id).get();
	}

}