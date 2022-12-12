package com.stableity.model.person;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class PersonTest {

    @Autowired

    public Person testPerson = new Person("Test Chief", Role.CHIEF);

    @Test
    void addHorse() {
    }



}