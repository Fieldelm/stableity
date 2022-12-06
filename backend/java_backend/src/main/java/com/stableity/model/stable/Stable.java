package com.stableity.model.stable;

import com.stableity.model.person.person_children.Owner;
import com.stableity.model.person.person_children.Staff;
import com.stableity.model.stable.horse.Horse;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;
import java.util.UUID;

@Getter
@Entity
@NoArgsConstructor
public class Stable {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne
    private Owner chief;

    public Stable(Owner chief) {
        this.chief = chief;
    }

    @OneToMany
    private Set<Horse> horses;

    @ManyToMany
    private Set<Owner> owners;

    @ManyToMany
    private Set<Staff> staff;


}
