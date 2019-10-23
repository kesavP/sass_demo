package com.keys.java.service_api.jpa.pojo;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @since 07-09-2019
 * @author kesav
 */

@Entity
@Table(name="login")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(allowGetters = true)
public class Login {
	
	@Id
	@GenericGenerator(name = "pklogin_generator", strategy = "com.keys.java.service_api.jpa.pojo.CustomIdGenerator")
	@GeneratedValue(generator = "pklogin_generator")
	private int pklogin;
	
	@NotBlank
    private String name;
	
	@NotBlank
    private String email;
	
	@NotBlank
    private String password;

	public int getPklogin() {
		return pklogin;
	}

	public void setPklogin(int pklogin) {
		this.pklogin = pklogin;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	

}
