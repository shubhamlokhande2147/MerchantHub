package com.demo.service;

import java.util.List;

import com.demo.model.Bill;

public interface IBillService {

	List<Bill> getallbills();

	Bill getById(int b_id);

	void addnewbill(Bill bill);

	void updateById(Bill p);

	void deleteById(int b_id);

}
