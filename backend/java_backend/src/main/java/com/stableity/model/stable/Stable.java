package com.stableity.model.stable;

import com.stableity.model.person.Person;
import com.stableity.model.person.Role;
import com.stableity.model.person.person_children.Owner;
import com.stableity.model.person.person_children.Staff;
import com.stableity.model.stable.horse.Horse;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Locale;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Getter
@Entity
@NoArgsConstructor
public class Stable {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne
    private Person chief;

    @OneToMany
    private Set<Horse> horses;

    @ManyToMany
    private Set<Person> owners;

    @ManyToMany
    private Set<Person> staff;

    @ManyToMany
    private Set<Person> vets;

    @ManyToMany
    private Set<Person> farriers;


    public Stable(Person chief) {
        this.chief = chief;
    }

    public String removeMember(Person person, Role role) {
        if (person.hasRole(role)) {

            switch (role) {
                case STAFF -> {
                    this.staff.remove(person);
                    break;
                }
                case OWNER -> {
                    this.owners.remove(person);
                    break;
                }
                case FARRIER -> {
                    this.farriers.remove(person);
                    break;
                }
                case VETERINARY -> {
                    this.vets.remove(person);
                    break;
                }
                default -> {
                    this.chief = null;
                }
            }
            return String.format("%s is removed from %s.", person.getName(), role == Role.CHIEF ? "the chief position" : role == Role.STAFF ? role.toString().toLowerCase() : role.toString().toLowerCase() + "s");
        }
        return "";
    }

}
