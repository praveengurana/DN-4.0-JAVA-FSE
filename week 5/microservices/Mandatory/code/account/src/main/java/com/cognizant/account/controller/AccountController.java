package com.cognizant.account.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@RestController
@RequestMapping("/accounts")
public class AccountController {
	
	@GetMapping("/{number}")
	public Map<String,Object> getAccount(@PathVariable String number){
		
		return Map.of(
				"number" , number,
				"type" , "Savings",
				"balance" , 23456
				);
	}

}
