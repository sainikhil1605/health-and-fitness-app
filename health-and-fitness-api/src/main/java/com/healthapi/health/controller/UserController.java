package com.healthapi.health.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthapi.health.model.UserModel;
import com.healthapi.health.service.UserService;

@CrossOrigin(originPatterns = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/v1/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/registration")
	public ResponseEntity<UserModel> addUser(@RequestBody UserModel user){
		UserModel userModel=userService.addUser(user);
		return ResponseEntity.ok(userModel);
	}
}
