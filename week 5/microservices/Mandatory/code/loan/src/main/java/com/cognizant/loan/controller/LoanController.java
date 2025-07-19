package com.cognizant.loan.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.Map;

@RestController
@RequestMapping("/loans")
public class LoanController {
	
	@GetMapping("/{id}")
	public Map<String , Object> getLoan(@PathVariable String id){
		
		return Map.of(
				 "number", id, 
				 "type", "car", 
				 "loan", "400000", 
				 "emi", "3258", 
				 "tenure","18" 
				);
	}

}
