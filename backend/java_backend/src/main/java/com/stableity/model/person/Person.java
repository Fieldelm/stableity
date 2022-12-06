package com.stableity.model.person;

import com.stableity.model.horse.Horse;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.lang.reflect.Member;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
//import java.util.*;

@Getter
@Setter
@NoArgsConstructor
@MappedSuperclass
public class Person {

    private String name;

    private int phoneNr;

    private String email;

    @OneToMany
    private Set<Horse> horses;


    public Person(String name) {
        this.name = name;
        this.phoneNr = 0;
        this.email = null;
        this.horses = new HashSet<>();
    }
    @ElementCollection
    @Enumerated(EnumType.STRING)
    private Set<Role> roles;

    public void addHorse(Horse horse){
        this.horses.add(horse);
    }



}
