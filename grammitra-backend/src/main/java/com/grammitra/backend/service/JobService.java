package com.grammitra.backend.service;

import com.grammitra.backend.model.Job;
import com.grammitra.backend.model.JobStatus;
import com.grammitra.backend.repository.JobRepository;
import com.grammitra.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class JobService {

    private final JobRepository jobRepository;
    private final UserRepository userRepository;

    public JobService(JobRepository jobRepository,
                      UserRepository userRepository) {
        this.jobRepository = jobRepository;
        this.userRepository = userRepository;
    }

    // 📩 Create Job (Employer only)
    public Job createJob(String employerId, String workerId) {

        // ✅ ROLE CHECK
        if (!"EMPLOYER".equals(getUserRole(employerId))) {
            throw new RuntimeException("Only employer can create job");
        }

        if (workerId == null || workerId.isEmpty()) {
            throw new RuntimeException("WorkerId required");
        }

        Job job = new Job();
        job.setEmployerId(employerId);
        job.setWorkerId(workerId);
        job.setStatus(JobStatus.PENDING);
        job.setCreatedAt(new Date());
        job.setUpdatedAt(new Date());

        return jobRepository.save(job);
    }

    // 🔄 Update Job Status (Worker only)
    public Job updateJobStatus(String jobId, JobStatus newStatus, String workerId) {

        // ✅ ROLE CHECK
        if (!"WORKER".equals(getUserRole(workerId))) {
            throw new RuntimeException("Only worker can update job");
        }

        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job not found"));

        // 🔒 SECURITY CHECK
        if (!job.getWorkerId().equals(workerId)) {
            throw new RuntimeException("Unauthorized: Not your job");
        }

        JobStatus currentStatus = job.getStatus();

        if (!isValidTransition(currentStatus, newStatus)) {
            throw new RuntimeException("Invalid status transition: "
                    + currentStatus + " → " + newStatus);
        }

        job.setStatus(newStatus);
        job.setUpdatedAt(new Date()); // ✅ IMPORTANT

        return jobRepository.save(job);
    }

    // 🔥 STATE RULES
    private boolean isValidTransition(JobStatus current, JobStatus next) {

        switch (current) {

            case PENDING:
                return next == JobStatus.ACCEPTED || next == JobStatus.REJECTED;

            case ACCEPTED:
                return next == JobStatus.IN_PROGRESS;

            case IN_PROGRESS:
                return next == JobStatus.COMPLETED;

            case COMPLETED:
                return next == JobStatus.CLOSED;

            default:
                return false;
        }
    }

    // ✅ ROLE FETCH
    private String getUserRole(String userId) {

        return userRepository.findByPhone(userId)
                .map(user -> {
                    if (user.getRole() == null) {
                        throw new RuntimeException("User role not set");
                    }
                    return user.getRole();
                })
                .orElseThrow(() -> new RuntimeException("User not found for phone: " + userId));
    }

    public List<Job> getWorkerJobs(String workerId) {
        return jobRepository.findByWorkerId(workerId);
    }

    public List<Job> getEmployerJobs(String employerId) {
        return jobRepository.findByEmployerId(employerId);
    }
}