package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demo.model.SmartCard;

public interface ISmartCardRepository extends MongoRepository<SmartCard, Integer>{

}
