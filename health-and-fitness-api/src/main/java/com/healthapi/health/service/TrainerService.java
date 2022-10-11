package com.healthapi.health.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.healthapi.health.entity.Trainer;
import com.healthapi.health.model.TrainerModel;


public interface TrainerService {
	List<TrainerModel> getTrainer();

	TrainerModel addTrainer(TrainerModel trainModel);

	TrainerModel getTrainerById(Long id);
}
