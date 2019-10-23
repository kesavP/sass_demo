package com.keys.java.service_api.oauth2extractors.config.extractors;

import java.util.Map;

import org.springframework.boot.autoconfigure.security.oauth2.resource.PrincipalExtractor;

public class KeysPrincipalExtractor implements PrincipalExtractor {

	@Override
    public Object extractPrincipal(Map<String, Object> map) {
        return map.get("name");
    }
}
