package com.stableity.model.person;

import com.stableity.model.stable.horse.Horse;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
//import java.util.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
//@MappedSuperclass
public class Person {

    @Id
    @GeneratedValue
    private UUID id;

    private String nickName;
    private String name = null;

    private int phoneNr = 0;

    private String email = null;

    @OneToMany
    private Set<Horse> horses = new HashSet<>();

    private boolean hasHorse = false;

    @ElementCollection
    @Enumerated(EnumType.STRING)
    private Set<Role> roles = new HashSet<>();

    public Person(String nickName, Role mainRole) {
        this.nickName = nickName;
        addRole(mainRole);
    }

    public void addHorse(Horse horse) {
        this.horses.add(horse);
        this.hasHorse = true;
    }

    public void removeHorse(Horse horse) {
        if (this.horses.contains(horse)) {
            this.horses.remove(horse);
            if (this.horses.size() == 0) {
                hasHorse = false;
            }
        }
    }

    public void addRole(Role role) {
        this.roles.add(role);
    }

    public void removeRole(Role role) {
        this.roles.remove(role);
    }

    public boolean hasRole(Role role) {
        return this.roles.contains(role);
    }

}
