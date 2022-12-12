package com.stableity.sevice;

import com.stableity.model.person.Person;
import com.stableity.model.stable.horse.Horse;
import com.stableity.repositories.persis_stable.HorseRepository;
import com.stableity.repositories.persist_person.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class HorseService {

    HorseRepository horseRepo;
    PersonRepository personRepo;

    @Autowired
    public HorseService(HorseRepository horseRepo, PersonRepository personRepo) {
        this.horseRepo = horseRepo;
        this.personRepo = personRepo;
    }


    public Horse createHorse(UUID ownerID, String horseName){
        Person newOwner = personRepo.findById(ownerID).get();

        if (newOwner != null){
            Horse newHorse = new Horse(horseName, newOwner);
            newOwner.addHorse(newHorse);

            horseRepo.saveAndFlush(newHorse);
            personRepo.saveAndFlush(newOwner);

            return newHorse;
        }

        return null;
    }

    public List<Horse> getHorsesByName(String horseName){
        return horseRepo.findByName(horseName).get();
    }

    public void updateHorseMainData(Horse updatedHorse) {
        Horse horse = horseRepo.findById(updatedHorse.getId()).get();

        horse.setBornYear(updatedHorse.getBornYear());
        horse.setColor(updatedHorse.getColor());
        horse.setGender(updatedHorse.getGender());

        horseRepo.saveAndFlush(horse);

    }

}
