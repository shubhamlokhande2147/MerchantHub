package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Bill;
import com.demo.service.IBillService;

@RestController
@RequestMapping("/bill")
@CrossOrigin(origins = "*")
public class BillController {
	
	@Autowired
	IBillService bservice;
	
			
		@GetMapping("/getallbills")
		public ResponseEntity<List<Bill>> getallbills() {
			return ResponseEntity.ok(bservice.getallbills());
		}
		
		
		
		@GetMapping("/getbills/{b_id}")
		public ResponseEntity<Bill> getsinglebill(@PathVariable int b_id) {
			Bill p = bservice.getById(b_id);
			if (p != null)
				return ResponseEntity.ok(p);
			else
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		
		
		@PostMapping("/addbill")
		public ResponseEntity<String> addbill(@RequestBody Bill bill) {
		    System.out.println(bill);
		    bservice.addnewbill(bill);
		    return ResponseEntity.ok("Data added successfully");
		}
		
		
		
		@PutMapping("/updatebill/{b_id}")
		public ResponseEntity<String> updatemerchant(@RequestBody Bill p) {
			bservice.updateById(p);
			return ResponseEntity.ok("Data modified successfully");
		}
		
		@DeleteMapping("/deletebill/{b_id}")
		public ResponseEntity<String> deletemerchant(@PathVariable int b_id) {
			bservice.deleteById(b_id);
			return ResponseEntity.ok("Data deleted successfully");
		}

}
