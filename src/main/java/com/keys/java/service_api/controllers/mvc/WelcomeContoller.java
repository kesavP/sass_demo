package com.keys.java.service_api.controllers.mvc;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ResolvableType;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;

import com.keys.java.service_api.BootApp;

@Controller
public class WelcomeContoller {
	
	private static final Logger logger = LogManager.getLogger(BootApp.class);
	
	private static final String authorizationRequestBaseUri = "oauth2/authorize-client";
    Map<String, String> oauth2AuthenticationUrls = new HashMap<>();

    @Autowired
    private ClientRegistrationRepository clientRegistrationRepository;
    @Autowired
    private OAuth2AuthorizedClientService authorizedClientService;
	
	@PostConstruct
	public void init() {
		logger.info("------------------------------- in init methodkesav");
	}
	
	@RequestMapping(value="/welcome", method = RequestMethod.GET)
    public String showLoginPage(HttpServletRequest request){
		logger.info("thsn is welcome page ");
        return "welcome";
    }
	
	@GetMapping("/oauth_login")
    public String getLoginPage(Model model) {
        Iterable<ClientRegistration> clientRegistrations = null;
        ResolvableType type = ResolvableType.forInstance(clientRegistrationRepository)
            .as(Iterable.class);
        if (type != ResolvableType.NONE && ClientRegistration.class.isAssignableFrom(type.resolveGenerics()[0])) {
        	logger.info("performing first login since type is null");
            clientRegistrations = (Iterable<ClientRegistration>) clientRegistrationRepository;
        }
        clientRegistrations.forEach(registration -> oauth2AuthenticationUrls.put(registration.getClientName(), authorizationRequestBaseUri + "/" + registration.getRegistrationId()));
        clientRegistrations.forEach(registration -> logger.info(registration.getClientName()+", "+registration.getClientSecret() +", "+registration.getClientId()));
        model.addAttribute("urls", oauth2AuthenticationUrls);
        
        Set<Entry<String,String>> s = oauth2AuthenticationUrls.entrySet(); 
        for(Map.Entry<String, String> it: s) {
        	logger.info("oauth authontication urls "+it.getKey()+", "+it.getValue());
        }

        return "oauth_login";
    }

    @GetMapping("/loginSuccess")
    public String getLoginInfo(Model model, OAuth2AuthenticationToken authentication) {
    	System.out.println(authentication.getCredentials()+", details: "+authentication.getDetails()+", principal: "+authentication.getPrincipal());

        OAuth2AuthorizedClient client = authorizedClientService.loadAuthorizedClient(authentication.getAuthorizedClientRegistrationId(), authentication.getName());

        String userInfoEndpointUri = client.getClientRegistration()
            .getProviderDetails()
            .getUserInfoEndpoint()
            .getUri();
        
        logger.info("user info endpoint uri "+userInfoEndpointUri);
        if (!StringUtils.isEmpty(userInfoEndpointUri)) {
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.AUTHORIZATION, "Bearer " + client.getAccessToken()
                .getTokenValue());

            HttpEntity<String> entity = new HttpEntity<String>("", headers);

            ResponseEntity<Map> response = restTemplate.exchange(userInfoEndpointUri, HttpMethod.GET, entity, Map.class);
            Map userAttributes = response.getBody();
            Set<Entry> s = userAttributes.entrySet(); 
            for(Map.Entry it: s) {
            	logger.info("userAttributes "+it.getKey()+", "+it.getValue());
            }
            model.addAttribute("name", userAttributes.get("name"));
        }

        return "loginSuccess";
    }

}
