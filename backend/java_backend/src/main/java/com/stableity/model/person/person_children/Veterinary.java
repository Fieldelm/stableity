package com.stableity.model.person.person_children;

import com.stableity.model.person.Person;
import com.stableity.model.person.Role;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@Entity
@NoArgsConstructor
public class Veterinary extends Person {
    @Id
    @GeneratedValue
    private UUID id;

    public Veterinary(String name) {
        super(name);
    }

    //TODO add methods and fields
}
