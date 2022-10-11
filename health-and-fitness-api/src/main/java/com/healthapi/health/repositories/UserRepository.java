package com.healthapi.health.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

import com.healthapi.health.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
