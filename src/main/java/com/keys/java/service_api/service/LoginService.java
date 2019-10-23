package com.keys.java.service_api.service;

import java.util.List;

import com.keys.java.service_api.jpa.pojo.Login;
import com.keys.java.service_api.repository.LoginRepository;
import com.keys.java.service_api.repository.implementation.LoginRepositoryImpl;

public class LoginService {
	
	private LoginRepositoryImpl loginRepoImpl;
	   
	   public void setLoginRepo(LoginRepositoryImpl loginRepoImpl) {
		   this.loginRepoImpl = loginRepoImpl;
	   }
	   
	   public List<Login> getAllRecords() {
		   return loginRepoImpl.findAll();
	   }
	   
	   public void save(Login login) {
		   loginRepoImpl.saveRecord(login);
	   }

}
