package com.keys.java.service_api.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.keys.java.service_api.jpa.pojo.Login;
import com.keys.java.service_api.repository.LoginRepository;
import com.keys.java.service_api.repository.implementation.LoginRepositoryImpl;
import com.keys.java.service_api.service.LoginService;


/**
 * @since 07-09-2019
 * @author kesav
 *
 */
@RestController
@RequestMapping("/api")
@CrossOrigin( origins = "*" )
public class LoginController {
	
	@Autowired
	LoginService loginService;
	
	@GetMapping("/allLogins")
    public List<Login> getAllNotes(HttpServletRequest req) {
        return loginService.getAllRecords();
    }
	
	@GetMapping("/menus")
	public String getMenus(@RequestParam(value ="username") String username) {
		System.out.println("i am t-o send menus "+username);
		return "hai bwhdjkhkhjewjjjk";
	}
	
	@PostMapping("/doLogin")
	public String performLogin(@Valid @RequestBody Login login) {
		System.out.println("saving user "+login.getName());
		loginService.save(login);
		return "successful";
	}

}
