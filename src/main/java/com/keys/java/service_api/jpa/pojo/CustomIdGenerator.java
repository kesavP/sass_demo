package com.keys.java.service_api.jpa.pojo;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

public class CustomIdGenerator implements IdentifierGenerator {

	@Override
	public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException {
		Random random = new Random();
		try {
			for(int i =0; i<3; i++){
			    int randomInteger = random.nextInt(1000000);
			    System.out.println("pseudo random int in a range : " + randomInteger);
			    return randomInteger;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
