package com.stableity.model.stable.horse;

import com.stableity.model.person.person_children.Owner;
import com.stableity.model.person.Person;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@Entity
@NoArgsConstructor

public class Horse {

    private String name;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private Person owner;

    public Horse(String name, Person owner) {
        this.name = name;
        this.owner = owner;
    }


    @Id
    @GeneratedValue
    UUID id;

    private int bornYear;
    private String color;
    private String gender;

    private String father;
    private String maternalGrandFather;
    private String FEINr;

    private LocalDate entryDate;

    public void setEntryDate(int year, int month, int day) {
        this.entryDate = LocalDate.of(year, month, day);
    }


}

