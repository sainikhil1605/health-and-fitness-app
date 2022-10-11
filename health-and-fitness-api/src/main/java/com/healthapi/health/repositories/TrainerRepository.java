package com.healthapi.health.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthapi.health.entity.Trainer;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Long>  {
	
}
