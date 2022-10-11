package com.healthapi.health.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.healthapi.health.entity.User;
import com.healthapi.health.model.UserModel;
import com.healthapi.health.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Override
	public UserModel addUser(UserModel userModel) {
		User user=new User();
		BeanUtils.copyProperties(userModel, user);
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);
		return userModel;
	}

}
