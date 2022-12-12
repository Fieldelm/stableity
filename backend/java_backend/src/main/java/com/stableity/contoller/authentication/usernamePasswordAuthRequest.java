package com.stableity.contoller.authentication;


import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class usernamePasswordAuthRequest {

    private String username;
    private String password;
}
