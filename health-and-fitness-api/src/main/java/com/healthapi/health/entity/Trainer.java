package com.healthapi.health.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Trainer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private long Id;
	private String name;
	@Column(columnDefinition = "TEXT")
	private String description;
}
