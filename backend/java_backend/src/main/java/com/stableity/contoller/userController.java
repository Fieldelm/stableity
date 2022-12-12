package com.stableity.contoller;

import com.stableity.contoller.authentication.PasswordConfig;
import com.stableity.model.person.UserEntity;
import com.stableity.sevice.UserService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class userController {

    private final UserService userService;
    private final PasswordConfig passwordConfig;

    @Autowired
    public userController(UserService userService, PasswordConfig passwordConfig) {
        this.userService = userService;
        this.passwordConfig = passwordConfig;
    }

    @PostMapping("/register")
    public void registerUser(@RequestBody UserEntity newUser, HttpServletResponse response){
        if(!userService.existByEmail(newUser.getEmail())){
            newUser.setPassword(passwordConfig.passwordEncoder().encode(newUser.getPassword()));

            userService.saveUser(newUser);
            response.setStatus(200);
        }
        else {
            response.setStatus(409);
        }
    }
}
