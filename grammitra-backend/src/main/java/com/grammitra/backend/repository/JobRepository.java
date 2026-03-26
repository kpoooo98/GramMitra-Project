package com.grammitra.backend.repository;

import com.grammitra.backend.model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface JobRepository extends MongoRepository<Job, String> {

    List<Job> findByWorkerId(String workerId);

    List<Job> findByEmployerId(String employerId);
}