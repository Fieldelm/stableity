package com.stableity.sevice;

import com.stableity.model.person.Person;
import com.stableity.model.person.Role;
import com.stableity.repositories.persis_stable.HorseRepository;
import com.stableity.repositories.persist_person.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    PersonRepository personRepo;
    HorseRepository horseRepo;


    @Autowired
    public PersonService(PersonRepository personRepo, HorseRepository horseRepo) {
        this.personRepo = personRepo;
        this.horseRepo = horseRepo;
    }

    public void createPerson(String nickName, Role mainRole){
        personRepo.saveAndFlush(new Person(nickName, mainRole));
    }

}
