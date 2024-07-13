package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Bill;

@Repository
public interface IBillDao extends JpaRepository<Bill,Integer> {

}
