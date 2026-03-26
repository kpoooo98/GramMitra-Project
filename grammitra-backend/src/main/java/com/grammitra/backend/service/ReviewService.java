package com.grammitra.backend.service;

import com.grammitra.backend.model.Job;
import com.grammitra.backend.model.JobStatus;
import com.grammitra.backend.model.Review;
import com.grammitra.backend.model.Worker;
import com.grammitra.backend.repository.JobRepository;
import com.grammitra.backend.repository.ReviewRepository;
import com.grammitra.backend.repository.WorkerRepository;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final WorkerRepository workerRepository;
    private final JobRepository jobRepository;

    public ReviewService(ReviewRepository reviewRepository,
                         WorkerRepository workerRepository,
                         JobRepository jobRepository) {
        this.reviewRepository = reviewRepository;
        this.workerRepository = workerRepository;
        this.jobRepository = jobRepository;
    }

    public Review addReview(String jobId, int rating, String feedback, String employerId) {

        // ✅ Rating validation
        if (rating < 1 || rating > 5) {
            throw new RuntimeException("Rating must be between 1 and 5");
        }

        if (feedback == null || feedback.trim().isEmpty()) {
            throw new RuntimeException("Feedback cannot be empty");
        }

        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job not found"));

        // ✅ Only employer can review
        if (!job.getEmployerId().equals(employerId)) {
            throw new RuntimeException("Only employer can add review");
        }

        // ✅ Job must be completed
        if (job.getStatus() != JobStatus.COMPLETED) {
            throw new RuntimeException("Job not completed yet");
        }

        // ✅ Prevent duplicate review
        if (reviewRepository.existsByJobId(jobId)) {
            throw new RuntimeException("Review already submitted for this job");
        }

        Review review = new Review();
        review.setJobId(jobId);
        review.setWorkerId(job.getWorkerId());
        review.setRating(rating);
        review.setFeedback(feedback);

        reviewRepository.save(review);

        updateWorkerRating(job.getWorkerId(), rating);

        return review;
    }

    private void updateWorkerRating(String workerId, int newRating) {

        Worker worker = workerRepository.findByUserId(workerId)
                .orElseThrow(() -> new RuntimeException("Worker not found"));

        double totalRating = worker.getRating() * worker.getTotalReviews();
        worker.setTotalReviews(worker.getTotalReviews() + 1);
        worker.setRating((totalRating + newRating) / worker.getTotalReviews());

        workerRepository.save(worker);
    }
}