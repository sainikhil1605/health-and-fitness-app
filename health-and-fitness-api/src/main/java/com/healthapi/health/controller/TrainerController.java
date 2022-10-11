package com.healthapi.health.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.function.EntityResponse;

import com.healthapi.health.entity.Trainer;
import com.healthapi.health.model.TrainerModel;
import com.healthapi.health.service.TrainerService;

@CrossOrigin(originPatterns = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/v1/trainers")
public class TrainerController {
	
	@Autowired
	private TrainerService trainerService;
	
	@GetMapping("")
	public ResponseEntity<List<TrainerModel>> getTrainers() {
		
		return ResponseEntity.ok(trainerService.getTrainer());
	}
	@PostMapping("")
	public ResponseEntity<TrainerModel> addTrainer(@RequestBody TrainerModel trainModel) {
		
		TrainerModel trainerModel=trainerService.addTrainer(trainModel);
		return  ResponseEntity.ok(trainerModel);
	}
	@GetMapping("/{id}")
	public ResponseEntity<TrainerModel> getTrainerById(@PathVariable("id") Long id) {
		 return ResponseEntity.ok(trainerService.getTrainerById(id));
	}
}
