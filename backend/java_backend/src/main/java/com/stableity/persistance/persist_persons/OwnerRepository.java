package com.stableity.persistance.persist_persons;

import com.stableity.model.person.person_children.Owner;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface OwnerRepository extends JpaRepository<Owner, UUID> {
}
