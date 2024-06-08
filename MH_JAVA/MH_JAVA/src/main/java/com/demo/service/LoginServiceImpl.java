package com.demo.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.ILoginDao;

@Service
public class LoginServiceImpl implements ILoginService {
	
	@Autowired
	ILoginDao ldao;

	
    public boolean authenticate(String username, String password) {
        System.out.println("Service - Username: " + username + ", Password: " + password);
        return ldao.existsByUsernameAndPassword(username, password);
    }


    @Transactional  //Transaction Management: It simplifies transaction management by removing the need for manual handling of transactions using beginTransaction(), commit(), and rollback() statements.
    public int forgetPassword(String password, String email) {
        System.out.println("Service - password: " + password + ", email: " + email);

        return ldao.forgetPassword(password, email);
    }

}
