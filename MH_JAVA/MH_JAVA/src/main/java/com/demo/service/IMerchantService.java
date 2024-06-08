package com.demo.service;

import org.springframework.stereotype.Service;

import com.demo.model.Merchant;

import java.util.List;

@Service
public interface IMerchantService {

	List<Merchant> getallmerchants();

	Merchant getById(int ac_id);

	void addnewmerchant(Merchant p);

	void updateById(Merchant p);

	void deleteById(int m_id);

}
