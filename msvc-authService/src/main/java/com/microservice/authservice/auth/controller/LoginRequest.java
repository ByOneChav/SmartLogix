package com.microservice.authservice.auth.controller;

public record LoginRequest(
    String email,
    String password
) {
} 
