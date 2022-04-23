package com.example.demo.service.Impl;

import com.example.demo.model.Vehicle;
import com.example.demo.repository.IVehicleRepository;
import com.example.demo.service.VehicleService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service
@Transactional
public class VehicleServiceImpl implements VehicleService{

	@Autowired
	private IVehicleRepository iVehicleRepository;
	
	//Add Vehicle
	@Override
	public Vehicle addVehicle(Vehicle vehicle) {
		return iVehicleRepository.save(vehicle);
	}

	//Get All vehicles
	@Override
	public List<Vehicle> getAllVehicles() {
		return iVehicleRepository.findAll();
	}

}
