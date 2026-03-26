package com.grammitra.backend.service;

import com.grammitra.backend.model.Worker;
import com.grammitra.backend.repository.WorkerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkerService {

    private final WorkerRepository workerRepository;

    public WorkerService(WorkerRepository workerRepository) {
        this.workerRepository = workerRepository;
    }

    public Worker createOrUpdateWorker(String userId, List<String> skills,
                                       double wage, boolean availability) {

        Worker worker = workerRepository.findByUserId(userId)
                .orElse(new Worker());

        worker.setUserId(userId);
        worker.setSkills(skills);
        worker.setWage(wage);
        worker.setAvailability(availability);

        return workerRepository.save(worker);
    }

    // 🔥 NEW: SEARCH WORKERS
    public List<Worker> searchWorkers(String skill) {

        if (skill == null || skill.isEmpty()) {
            throw new RuntimeException("Skill is required");
        }

        return workerRepository.findBySkillsContainingAndAvailabilityTrue(skill);
    }
}