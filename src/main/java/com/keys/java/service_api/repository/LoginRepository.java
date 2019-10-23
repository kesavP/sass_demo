package com.keys.java.service_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.keys.java.service_api.jpa.pojo.Login;

/**
 * @since 07-09-2019
 * @author kesav
 *
 */
@Repository
public interface LoginRepository extends JpaRepository<Login, Long> {
	

}
