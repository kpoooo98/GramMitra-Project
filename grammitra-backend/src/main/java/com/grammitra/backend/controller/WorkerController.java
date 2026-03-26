package com.grammitra.backend.controller;

import com.grammitra.backend.model.Worker;
import com.grammitra.backend.service.WorkerService;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/worker")
public class WorkerController {

    private final WorkerService workerService;

    public WorkerController(WorkerService workerService) {
        this.workerService = workerService;
    }

    // 🔥 Create/Update Worker Profile (SECURE VERSION)
    @PostMapping("/profile")
    public Worker createWorker(Authentication authentication,
                               @RequestParam List<String> skills,
                               @RequestParam double wage,
                               @RequestParam boolean availability) {

        // ✅ Get userId from JWT (NO FRONTEND INPUT)
        String userId = (String) authentication.getPrincipal();

        return workerService.createOrUpdateWorker(userId, skills, wage, availability);
    }

    // 🔥 SEARCH API
    @GetMapping("/search")
    public List<Worker> searchWorkers(@RequestParam String skill) {

        return workerService.searchWorkers(skill);
    }
}