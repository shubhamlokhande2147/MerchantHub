package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.IMerchantDao;
import com.demo.model.Merchant;

import java.util.List;
import java.util.Optional;


@Service
public class MerchantServiceImpl implements IMerchantService {
	
	@Autowired
	IMerchantDao mdao;

	@Override
	public List<Merchant> getallmerchants() {
		return mdao.findAll();
	}

	@Override
	public Merchant getById(int m_id) {
		 Optional<Merchant> op = mdao.findById(m_id);
		 if(op.isPresent()) {
			 return op.get();
		 }
		 return null;
	}

	@Override
	public void addnewmerchant(Merchant p) {
            mdao.save(p);		
	}

	@Override
	public void updateById(Merchant p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteById(int m_id) {
		// TODO Auto-generated method stub
		
	}
	
	

}
