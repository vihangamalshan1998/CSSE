package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demo.model.Route;

public interface IRouteRepository extends MongoRepository<Route, Integer>{

}
