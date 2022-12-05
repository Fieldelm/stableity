package com.stableity.model.horse;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@NoArgsConstructor

public class Horse {
    private String name;

    public Horse(String name) {
        this.name = name;
    }

    @Id
    @GeneratedValue
    UUID id;
}
