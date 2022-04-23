package com.example.demo.service.Impl;

import com.example.demo.model.Route;
import com.example.demo.repository.IRouteRepository;
import com.example.demo.service.RouteService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class RouteServiceImpl implements RouteService{
	
	@Autowired
	private IRouteRepository routeRepository;

	//Get Route Details
	@Override
	public Route getRouteDetails(int routeId) {
		return routeRepository.findById(routeId).orElse(null);
	}

	//Add Route Details
	@Override
	public Route addRouteDetails(Route route) {
		return routeRepository.save(route);
	}

	//Get all Route
	@Override
	public List<Route> getAllRoutes() {
		return routeRepository.findAll();
	}

}
