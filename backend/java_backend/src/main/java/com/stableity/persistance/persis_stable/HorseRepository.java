package com.stableity.persistance.persis_stable;

import com.stableity.model.stable.horse.Horse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface HorseRepository extends JpaRepository<Horse, UUID> {

   Optional <Horse> findByName(String name);

   }
