package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Merchant;

@Repository
public interface IMerchantDao extends JpaRepository<Merchant,Integer>  {

}
