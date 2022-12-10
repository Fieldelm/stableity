package com.stableity.model.person;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class UserEntity {

    @Id
    @GeneratedValue
    private UUID id;

    private String email;
    private String password;

    @OneToOne
    private Person memberShipPersonality;

    public UserEntity(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
