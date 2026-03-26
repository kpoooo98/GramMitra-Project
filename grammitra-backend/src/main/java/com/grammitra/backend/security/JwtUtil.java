package com.grammitra.backend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // ✅ STRONG + FIXED SECRET (NEVER CHANGE AFTER USE)
    private static final String SECRET =
            "MySuperSecretKeyMySuperSecretKeyMySuperSecretKey1234567890";

    // ✅ Always use same key instance
    private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());

    // 🔐 Generate JWT Token
    public String generateToken(String phone) {
        return Jwts.builder()
                .setSubject(phone)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour
                .signWith(key, SignatureAlgorithm.HS256) // ✅ IMPORTANT FIX
                .compact();
    }

    // 🔍 Extract phone from token
    public String extractPhone(String token) {
        return extractAllClaims(token).getSubject();
    }

    // 🔍 Extract all claims
    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key) // ✅ SAME KEY (VERY IMPORTANT)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // ✅ Validate Token (NEW ADD)
    public boolean validateToken(String token) {
        try {
            extractAllClaims(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}