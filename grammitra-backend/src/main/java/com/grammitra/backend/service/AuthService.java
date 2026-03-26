package com.grammitra.backend.service;

import com.grammitra.backend.model.User;
import com.grammitra.backend.repository.UserRepository;
import com.grammitra.backend.security.JwtUtil;

import org.springframework.stereotype.Service;

import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;
import java.util.Map;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    private static class OtpData {
        String otp;
        long expiryTime;

        OtpData(String otp, long expiryTime) {
            this.otp = otp;
            this.expiryTime = expiryTime;
        }
    }

    private Map<String, OtpData> otpStorage = new ConcurrentHashMap<>();

    public AuthService(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    public String sendOtp(String phone) {

        String otp = String.valueOf(new Random().nextInt(9000) + 1000);

        long expiry = System.currentTimeMillis() + (5 * 60 * 1000); // 5 min

        otpStorage.put(phone, new OtpData(otp, expiry));

        System.out.println("OTP for " + phone + " = " + otp);

        return "OTP sent successfully";
    }

    public String verifyOtp(String phone, String otp) {

        OtpData data = otpStorage.get(phone);

        if (data == null) {
            throw new RuntimeException("OTP not found");
        }

        if (System.currentTimeMillis() > data.expiryTime) {
            otpStorage.remove(phone);
            throw new RuntimeException("OTP expired");
        }

        if (!data.otp.equals(otp)) {
            throw new RuntimeException("Invalid OTP");
        }

        otpStorage.remove(phone);

        User user = userRepository.findByPhone(phone)
                .orElseGet(() -> new User(null, "", phone, "WORKER", null));

        userRepository.save(user);

        return jwtUtil.generateToken(phone);
    }
}