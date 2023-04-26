package com.kris.myportfoliowebsite.controller;

import com.kris.myportfoliowebsite.model.Message;
import com.kris.myportfoliowebsite.repo.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/contact")
public class ContactController {

    private final MessageRepository messageRepository;

    @Autowired
    public ContactController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @PostMapping()
    @CrossOrigin(origins = "*")
        public ResponseEntity<Message> createMessage(@RequestBody Message message) {
        Message newMessage = messageRepository.save(message);
        return new ResponseEntity<>(newMessage, HttpStatus.CREATED);
    }

}
