/**
 * Ticketing System for a Public Transport Network
 * 
 * @author 2021S2_REG_WE_02
 * 
 * @Version 1.0
 * 
 */
package com.example.demo.Factory;
import com.example.demo.service.Impl.GovernmentVehicleServiceImpl;
import com.example.demo.service.Impl.PrivateVehicleServiceImpl;
import com.example.demo.service.IService;
import org.springframework.beans.factory.annotation.Autowired;

public class VehicleFactory {
	//Default constructor
	private VehicleFactory() {}
	//Vehicle instance
	private static VehicleFactory instance = null;
	
	//Singleton pattern
	public static VehicleFactory getInstance() {
		if(instance == null) {
			synchronized (VehicleFactory.class) {
				if(instance == null) {
					instance =  new VehicleFactory();
				}
			}
		}
		return instance;
	}
	@Autowired
	GovernmentVehicleServiceImpl governmentVehicleServiceImpl;
	
	//Factory method
	public IService getVehicle(String vehicleType) {
		if(vehicleType == null) {
			return null;
		}
		if(vehicleType.equalsIgnoreCase("GOVERNMENT")) {
			return governmentVehicleServiceImpl;
		}else if(vehicleType.equalsIgnoreCase("PRIVATE")) {
			return new PrivateVehicleServiceImpl();
		}
		return null;
	}
}