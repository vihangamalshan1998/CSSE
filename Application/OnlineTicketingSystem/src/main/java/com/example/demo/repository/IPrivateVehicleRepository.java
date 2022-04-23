/**
 * Ticketing System for a Public Transport Network
 * 
 * @author 2021S2_REG_WE_02
 * 
 * @Version 1.0
 * 
 */
package com.example.demo.repository;

import com.example.demo.model.PrivateVehicle;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IPrivateVehicleRepository extends MongoRepository<PrivateVehicle, String>{

}