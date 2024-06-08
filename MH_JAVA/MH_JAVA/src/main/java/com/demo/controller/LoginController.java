//package com.demo.controller;
//
//import java.util.Map;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.demo.model.Login;
//import com.demo.service.ILoginService;
//
//import io.swagger.v3.oas.annotations.parameters.RequestBody;
//
//
//@RestController
//@RequestMapping("/log")
//@CrossOrigin(origins = "*")
//public class LoginController {
//	
//	@Autowired
//	ILoginService lservice;
//	
//     //method for login - 
//	
//	 @PostMapping("/login")
//	    public ResponseEntity<Object> login(@RequestBody Login login) {
//	        System.out.println("Controller - Username: " + login.getUsername() + ", Password: " + login.getPassword());
//	       
//	        boolean isAuthenticated = lservice.authenticate(login.getUsername() , login.getPassword());
//	        
//	        if (isAuthenticated) {
//	            return ResponseEntity.ok("Login successful");
//	        } else {
//	            return ResponseEntity.status(401).body("Invalid credentials");
//	        }
//	    }
//	 
//	 //method for forget password - 
//
//	 @PostMapping("/forgetpass")
//	    public ResponseEntity<String> forgetPassword(@RequestParam String password, @RequestParam String email) {
//	        System.out.println("Controller - email: " + email + ", Password: " + password);
//
//	        int isChanged = lservice.forgetPassword(password, email);
//
//	        if (isChanged > 0) {
//	            return ResponseEntity.ok("Password has been successfully changed.");
//	        } else {
//	            return ResponseEntity.status(401).body("Invalid credentials");
//	        }
//	    }	
//
//}
//
//

package com.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Login;
import com.demo.service.ILoginService;

@RestController
@RequestMapping("/log")
@CrossOrigin(origins = "*")
public class LoginController {

    @Autowired
    ILoginService lservice;

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Login login) {
        System.out.println("Controller - Username: " + login.getUsername() + ", Password: " + login.getPassword());
        
        boolean isAuthenticated = lservice.authenticate(login.getUsername(), login.getPassword());

        if (isAuthenticated) {
            return ResponseEntity.ok(Map.of("message", "Login successful"));
        } else {
            return ResponseEntity.status(401).body(Map.of("message", "Invalid credentials"));
        }
    }

    @PostMapping("/forgetpass")
    public ResponseEntity<Map<String, String>> forgetPassword(@RequestBody Login login) {
        System.out.println("Controller - email: " + login.getEmail() + ", Password: " + login.getPassword());

        int isChanged = lservice.forgetPassword(login.getPassword(),login.getEmail());

        if (isChanged > 0) {
            return ResponseEntity.ok(Map.of("message", "Password has been successfully changed."));
        } else {
            return ResponseEntity.status(401).body(Map.of("message", "Invalid credentials"));
        }
    }

}

