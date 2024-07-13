package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.IBillDao;
import com.demo.model.Bill;
import com.demo.model.Merchant;

@Service
public class BillServiceImpl implements IBillService {
	
	@Autowired
	IBillDao bdao;


	@Override
	public List<Bill> getallbills() {
		return bdao.findAll();
	}

	@Override
	public Bill getById(int b_id) {
		 Optional<Bill> op = bdao.findById(b_id);
		 if(op.isPresent()) {
			 return op.get();
		 }
		 return null;
	}

	@Override
	public void addnewbill(Bill bill) {
         bdao.save(bill);
	}

	@Override
	public void updateById(Bill bill) {
		Optional<Bill> op=bdao.findById(bill.getB_id());
		if(op.isPresent()) {
			Bill p = op.get();		
			p.setDate(bill.getDate());
			p.setPayAmount(bill.getPayAmount());
			p.setGoodNames(bill.getGoodNames());
			p.setMerchant(bill.getMerchant());
			bdao.save(p);
		}
	}

	@Override
	public void deleteById(int b_id) {
        bdao.deleteById(b_id);		
	}

}
