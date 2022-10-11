package com.healthapi.health.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthapi.health.entity.Trainer;
import com.healthapi.health.model.TrainerModel;
import com.healthapi.health.repositories.TrainerRepository;

import ch.qos.logback.core.joran.util.beans.BeanUtil;

@Service
public class TrainerServiceImpl implements TrainerService {
	
	@Autowired
	private TrainerRepository trainerRepository;

	@Override
	public List<TrainerModel> getTrainer() {
		List<Trainer> trainer=trainerRepository.findAll();
		List<TrainerModel> trainerModel=trainer.stream().map((item)-> new TrainerModel(item.getId(),item.getName(),item.getDescription())).collect(Collectors.toList());
		return trainerModel;
	}

	@Override
	public TrainerModel addTrainer(TrainerModel trainModel) {
		Trainer trainer=new Trainer();
		BeanUtils.copyProperties(trainModel, trainer);
		trainerRepository.save(trainer);
		return trainModel;
	}

	@Override
	public TrainerModel getTrainerById(Long id) {
		Trainer trainer=trainerRepository.findById(id).get();
		TrainerModel trainerModel=new TrainerModel();
		BeanUtils.copyProperties(trainer, trainerModel);
		return trainerModel;
	}

	

}
