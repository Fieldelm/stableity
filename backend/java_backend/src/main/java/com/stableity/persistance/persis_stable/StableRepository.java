package com.stableity.persistance.persis_stable;

import com.stableity.model.stable.Stable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface StableRepository extends JpaRepository<Stable, UUID> {
}
