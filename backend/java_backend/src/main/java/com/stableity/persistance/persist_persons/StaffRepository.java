package com.stableity.persistance.persist_persons;

import com.stableity.model.person.person_children.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface StaffRepository extends JpaRepository <Staff, UUID> {
}
