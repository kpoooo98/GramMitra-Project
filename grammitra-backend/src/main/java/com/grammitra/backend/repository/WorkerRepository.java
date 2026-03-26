package com.grammitra.backend.repository;

import com.grammitra.backend.model.Worker;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface WorkerRepository extends MongoRepository<Worker, String> {

    Optional<Worker> findByUserId(String userId);

    // 🔥 NEW: Search by skill + availability
    List<Worker> findBySkillsContainingAndAvailabilityTrue(String skill);
}