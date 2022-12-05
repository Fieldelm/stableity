package com.stableity.model.horse;

import com.stableity.model.person.Person;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
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

    private String FEINr;
    // private Person owner; TODO create person inheritances

    private int bornYear;
    private Gender gender;
    private String father;
    private String maternalGrandFather;
    private String color;
    private Date entry;

/*
    identification?: string,
    owner?: Owner,
    bornYear?: number,
    gender?: string,
    father?: string,
    maternalGrandfather?: string,
    color?: string,
    entry?: Date,*/
}

