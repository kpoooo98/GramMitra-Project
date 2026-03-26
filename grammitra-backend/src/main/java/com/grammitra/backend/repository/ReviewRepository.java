package com.grammitra.backend.repository;

import com.grammitra.backend.model.Review;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ReviewRepository extends MongoRepository<Review, String> {

    List<Review> findByWorkerId(String workerId);

    boolean existsByJobId(String jobId); // ✅ NEW
}