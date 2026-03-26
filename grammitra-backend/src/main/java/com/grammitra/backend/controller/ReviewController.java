package com.grammitra.backend.controller;

import com.grammitra.backend.model.Review;
import com.grammitra.backend.service.ReviewService;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping("/add")
    public Review addReview(@RequestParam String jobId,
                            @RequestParam int rating,
                            @RequestParam String feedback,
                            Authentication authentication) {

        String employerId = (String) authentication.getPrincipal();

        return reviewService.addReview(jobId, rating, feedback, employerId);
    }
}