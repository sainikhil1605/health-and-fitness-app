package com.healthapi.health.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;


@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	final String[] WHITE_LIST_URLS={"/api/v1/user/registration"};
	@Bean
	public PasswordEncoder passwordEncode() {
		return new BCryptPasswordEncoder(10);
	}

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable().authorizeHttpRequests().antMatchers(WHITE_LIST_URLS).permitAll();
		return http.build();

	}
}
