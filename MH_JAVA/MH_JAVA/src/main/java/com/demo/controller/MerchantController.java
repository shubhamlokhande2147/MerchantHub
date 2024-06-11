package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.service.IMerchantService;
import com.demo.model.Merchant;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/merchant")
@CrossOrigin(origins = "*")
public class MerchantController {

	@Autowired
	IMerchantService mservice;
		
	@GetMapping("/getallmerchants")
	public ResponseEntity<List<Merchant>> getallactivities() {
		return ResponseEntity.ok(mservice.getallmerchants());
	}
	
	
	
	@GetMapping("/getmerchants/{ac_id}")
	public ResponseEntity<Merchant> getsinglemerchant(@PathVariable int ac_id) {
		Merchant p = mservice.getById(ac_id);
		if (p != null)
			return ResponseEntity.ok(p);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}


	@PostMapping("/addmerchant")
	public ResponseEntity<String> addmerchant(@RequestBody Merchant merchant) {
	    System.out.println(merchant);
	    mservice.addnewmerchant(merchant);
	    return ResponseEntity.ok("Data added successfully");
	}

	

	@PutMapping("/updatemerchant/{m_id}")
	public ResponseEntity<String> updatemerchant(@RequestBody Merchant p) {
		mservice.updateById(p);
		return ResponseEntity.ok("Data modified successfully");
	}

	@DeleteMapping("/deletemerchant/{m_id}")
	public ResponseEntity<String> deletemerchant(@PathVariable int m_id) {
		mservice.deleteById(m_id);
		return ResponseEntity.ok("Data deleted successfully");
	}
	
	
	
}
