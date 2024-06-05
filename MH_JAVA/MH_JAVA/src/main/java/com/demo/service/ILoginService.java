package com.demo.service;

import org.springframework.stereotype.Service;

@Service
public interface ILoginService {

	boolean authenticate(String username, String password);

	int forgetPassword(String username, String email);

}
