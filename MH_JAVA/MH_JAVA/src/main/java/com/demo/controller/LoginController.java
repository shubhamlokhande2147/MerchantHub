package com.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Login;
import com.demo.service.ILoginService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/log")
@CrossOrigin(origins = "*")
public class LoginController {
	
	@Autowired
	ILoginService lservice;
	
     //method for login - 
	
	 @PostMapping("/login")
	    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
	        System.out.println("Controller - Username: " + username + ", Password: " + password);
	       
	        boolean isAuthenticated = lservice.authenticate(username, password);
	        
	        if (isAuthenticated) {
	            return ResponseEntity.ok("Login successful");
	        } else {
	            return ResponseEntity.status(401).body("Invalid credentials");
	        }
	    }
	 
	 //method for forget password - 

	 @PostMapping("/forgetpass")
	    public ResponseEntity<String> forgetPassword(@RequestParam String password, @RequestParam String email) {
	        int isChanged = lservice.forgetPassword(password, email);

	        if (isChanged > 0) {
	            return ResponseEntity.ok("Password has been successfully changed.");
	        } else {
	            return ResponseEntity.status(401).body("Invalid credentials");
	        }
	    }	

}


