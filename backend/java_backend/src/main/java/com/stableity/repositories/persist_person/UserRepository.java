package com.stableity.repositories.persist_person;

import com.stableity.model.person.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<UserEntity, UUID> {

    Boolean existsByEmail(String email);

}
