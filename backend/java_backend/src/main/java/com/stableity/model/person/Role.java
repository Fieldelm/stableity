package com.stableity.model.person;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.UUID;


public enum Role {
    OWNER,
    STAFF,
    VETERINARY,
    FARRIER,
    CHIEF;

}
