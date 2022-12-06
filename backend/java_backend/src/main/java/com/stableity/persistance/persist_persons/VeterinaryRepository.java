package com.stableity.persistance.persist_persons;

import com.stableity.model.person.person_children.Veterinary;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VeterinaryRepository extends JpaRepository<Veterinary, UUID> {
}
