package com.example.demo.controller;


import com.example.demo.model.Receipt;
import com.example.demo.model.Route;
import com.example.demo.service.RouteService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/route")
public class RouteController {
	
	@Autowired
	RouteService routeService;

	//Add Route Details
	@PostMapping("/add")
	public Route addRouteDetails(@RequestBody Route route){
		return routeService.addRouteDetails(route);
	}

	//Check Route by Route ID
	@GetMapping("/checkRouteID/{routeId}")
	public Route getRouteDetails(@PathVariable int routeId){
		return routeService.getRouteDetails(routeId);
	}

	//Get Receipt for the relevant route ID
	@GetMapping("/getReceipt/{routeId}")
	public Receipt getReceipt(@PathVariable int routeId){
		Route route = routeService.getRouteDetails(routeId);
		Receipt receipt = Receipt.getInstance();
		receipt.setStartLocation(route.getStartLocation());
		receipt.setEndLocation(route.getEndLocation());
		receipt.setAmountOfKM(route.getAmountOfKM());
		return receipt;
	}

	//Get all Routes
	@GetMapping("/getAllRoutes")
	public List<Route> getAllRoutes(){
		return routeService.getAllRoutes();
	}

}
