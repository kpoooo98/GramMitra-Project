package com.grammitra.backend.controller;

import com.grammitra.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/send-otp")
    public String sendOtp(@RequestParam String phone) {
        return authService.sendOtp(phone);
    }

    @PostMapping("/verify-otp")
    public String verifyOtp(@RequestParam String phone,
                            @RequestParam String otp) {
        return authService.verifyOtp(phone, otp);
    }
}