package com.example.demo.service;

import com.example.demo.model.Route;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public interface RouteService {
	//Get Route Details
	Route getRouteDetails(int routeId);
	//Add Route Details
	Route addRouteDetails(Route route);
	//Get All Routes
	List<Route> getAllRoutes();

}
