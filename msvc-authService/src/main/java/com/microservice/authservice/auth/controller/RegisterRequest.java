package com.microservice.authservice.auth.controller;

public record RegisterRequest(
    String email,
    String password,
    String name
) {
} 