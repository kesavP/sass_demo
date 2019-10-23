package com.keys.java.service_api;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.keys.java.service_api.spring.pojo.Company;

/**
 * @since 07-09-2019
 * @author kesav
 *
 */
@SpringBootApplication
@EnableJpaAuditing
public class BootApp extends SpringBootServletInitializer  {
	
	private static final Logger logger = LogManager.getLogger(BootApp.class);
	
	@Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(BootApp.class);
	  }
	
    public static void main( String[] args )
    {
        logger.info( "Hello World! serving ...." );
        ApplicationContext applicationContext = SpringApplication.run(BootApp.class, args);
//        for (String name : applicationContext.getBeanDefinitionNames()) {
//			System.out.println(name);
//		}
        Company company1 = (Company) applicationContext.getBean("company1");
        System.out.println(company1);
    }
}
