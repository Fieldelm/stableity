package com.stableity.model.person;

import com.stableity.model.horse.Horse;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;
import java.util.UUID;

@Getter
@Entity
@NoArgsConstructor

public class Owner extends Person {

    @Id
    @GeneratedValue
    private UUID id;


    public Owner(String name) {
        super(name);
    }


}
