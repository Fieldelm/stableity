package com.stableity.sevice;

import com.stableity.model.person.Person;
import com.stableity.model.stable.horse.Horse;
import com.stableity.persistance.persis_stable.HorseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;

@Service
public class HorseService {

    HorseRepository horseRepo;

    @Autowired
    public HorseService (HorseRepository horseRepo){
        this.horseRepo = horseRepo;
    }

    public void createHorse(Person owner, String horseName){
        horseRepo.saveAndFlush(new Horse(horseName, owner));
    }

    public List<Horse> getHorsesByName(String horseName){
        return horseRepo.findByName(horseName).get();
    }

    public void updateHorse(Horse updatedHorse) {
        Horse horse = horseRepo.findById(updatedHorse.getId()).get();

      /*  if (horse != null){
     TODO check the argument properties and update the horse with those
    }*/
    }

}
