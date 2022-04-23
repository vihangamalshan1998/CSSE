/**
 * Ticketing System for a Public Transport Network
 * 
 * @author 2021S2_REG_WE_02
 * 
 * @Version 1.0
 * 
 */
package com.example.demo.controller;

import com.example.demo.Factory.VehicleFactory;
import com.example.demo.model.PrivateVehicle;
import com.example.demo.model.Vehicle;
import com.example.demo.repository.IPrivateVehicleRepository;
import com.example.demo.service.GovernmentVehicleService;
import com.example.demo.service.IService;
import com.example.demo.service.PrivateVehicleService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/vehicle")
public class VehicleController {
	
	@Autowired 
	private PrivateVehicleService privateVehicleService;

	@Autowired 
	private GovernmentVehicleService governmentVehicleService;

	@Autowired 
	private IPrivateVehicleRepository vehcileRepository;

	//Add new Vehicle
	@PostMapping("/add")
	public boolean addNewVehicle(@RequestBody PrivateVehicle vehicle) {
		if(vehicle == null) return false;
		return privateVehicleService.addVehicle(vehicle)!= null?true:false;
	}

	//Get All Vehicles
	@GetMapping("/getAllVehicles")
	public List<PrivateVehicle> getAllVehicles(){
		return privateVehicleService.getAllVehicles();
	}

	//Update Vehicle Details
	@GetMapping("/updateVehicle/{vehicleId}/{arrivalTime}/{depatureTime}")
	public boolean updateVehicleDetails(@PathVariable String vehicleId, @PathVariable String arrivalTime, @PathVariable String depatureTime) {
		try {
			ArrayList<PrivateVehicle> Vehicles = (ArrayList<PrivateVehicle>) privateVehicleService.getAllVehicles();
			PrivateVehicle SelectedVehicle =null;

			for(PrivateVehicle v : Vehicles) {
				if(v.getVehicleRegNumber().equals(vehicleId)){
					SelectedVehicle = v;
				}
			}
			if(SelectedVehicle != null) {
				SelectedVehicle.getTimeTable().setAraivalTime(arrivalTime);
				SelectedVehicle.getTimeTable().setDepatureTime(depatureTime);
				privateVehicleService.addVehicle(SelectedVehicle);
				return true;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	//Delete a Vehicle
	@DeleteMapping("/delete/{vehicleId}/{vehicleType}")
	public boolean deleteVehicle(@PathVariable String vehicleId,@PathVariable String vehicleType) {
		if(vehicleId.equals("")) {
			return false;
		}
		IService service = VehicleFactory.getInstance().getVehicle(vehicleType);
		if(service != null) {
			try {
				service.deleteVehicle(vehicleId);
			} catch (Exception e) {
				if(vehicleType.equalsIgnoreCase("PRIVATE")) {
					privateVehicleService.deleteVehicle(vehicleId);
				}else if (vehicleType.equalsIgnoreCase("GOVERNMENT")) {
					governmentVehicleService.deleteVehicle(vehicleId);
				}
			}
		}
		return true;
	}

	//Get Vehicle by ID
	@GetMapping("/{vehicleId}")
	public Vehicle getVehicleById(@PathVariable String vehicleId) {
		return privateVehicleService.getVehicleById(vehicleId);
	}
}