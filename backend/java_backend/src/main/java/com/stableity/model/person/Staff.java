package com.stableity.model.person;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Entity
@NoArgsConstructor
public class Staff extends Person{

    public Staff(String name) {
        super(name);
    }

    @Id
    @Column(name = "id", nullable = false)
    private UUID id;

    private LocalDate entryDate;
    private LocalDate leaveDate;
    private double salary;

    public void setEntryDate(int year, int month, int day) {
        this.entryDate = LocalDate.of(year, month, day);
    }

    public void setLeaveDate(int year, int month, int day) {
        this.entryDate = LocalDate.of(year, month, day);
    }
}
