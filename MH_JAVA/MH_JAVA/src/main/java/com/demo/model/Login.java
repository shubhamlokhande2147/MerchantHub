package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "login")
public class Login {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int log_id;
	private String username;
	private String password;
	private String email;

	public Login() {
		super();
	}

	public Login(int log_id, String username, String password, String email) {
		super();
		this.log_id = log_id;
		this.username = username;
		this.password = password;
		this.email = email;
	}

	public int getLog_id() {
		return log_id;
	}

	public void setLog_id(int log_id) {
		this.log_id = log_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Login [log_id=" + log_id + ", username=" + username + ", password=" + password + ", email=" + email
				+ "]";
	}

}
