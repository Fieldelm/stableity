package com.stableity.persistance.persist_persons;

import com.stableity.model.person.person_children.Farrier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface FarrierRepository extends JpaRepository<Farrier, UUID> {
}
