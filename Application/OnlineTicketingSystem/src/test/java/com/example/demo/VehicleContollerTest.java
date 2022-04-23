/**
 * Ticketing System for a Public Transport Network
 * 
 * @author 2021S2_REG_WE_02
 * 
 * @Version 1.0
 * 
 */
package com.example.demo;

import com.example.demo.controller.VehicleController;
import com.example.demo.model.PrivateVehicle;
import com.example.demo.repository.IGovernmentVehicleRepository;
import com.example.demo.repository.IPrivateVehicleRepository;
import java.util.List;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;


@RunWith(SpringRunner.class)
@TestMethodOrder(OrderAnnotation.class)
@SpringBootTest
class VehicleContollerTest {
	@Autowired 
	VehicleController underTest;

	@Autowired 
	IPrivateVehicleRepository vehicleRepository;

	@Autowired 
	IGovernmentVehicleRepository governmentVehicleRepository;

	//Test case for check whether there is any government vehicle in the database
	@Test
	@Order(1)
	void AreThereAnyGovernmentVehicle() {
		int count = governmentVehicleRepository.findAll().size();
		boolean res = count > 0 ? true : false;
		assertEquals(false, res);
	}

	//Test case for add a new vehicle
	@Test
	@Order(2)
	void canAddVehicle() {
		PrivateVehicle vehicle = new PrivateVehicle();
		vehicle.setVehicleRegNumber("Test01");
		vehicle.setVehicleType("Car");
		vehicle.setNumberOfSeats(5);
		underTest.addNewVehicle(vehicle);
		assertNotNull(underTest.getVehicleById("Test01"));
	}

	//Test case for add null vehicle
	@Test
	@Order(3)
	void canAddNullVehicle() {
		boolean res = underTest.addNewVehicle(null);
		assertEquals(false, res);
	}

	//Test case for check whether there is any private vehicle in the database
	@Test
	@Order(4)
	void canGetAllVehicles() {
		List<PrivateVehicle> vehicleList = underTest.getAllVehicles();
		assertThat(vehicleList).size().isGreaterThan(0);

	}
	//Test case for delete particular vehicle 
	@Test
	@Order(5)
	void canDeleteVehicle() {
		vehicleRepository.deleteById("Test01");
		assertThat(vehicleRepository.existsById("Test01")).isEqualTo(false);
	}

	//Test case for delete particular vehicle passing empty parameters
	@Test
	@Order(6)
	void canDeleteWhenIdIsEmpty() {
		boolean res =underTest.deleteVehicle("", "");
		assertEquals(false, res);
	}
}