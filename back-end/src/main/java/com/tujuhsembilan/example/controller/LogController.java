package com.tujuhsembilan.example.controller;

import com.tujuhsembilan.example.dto.Log;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LogController {

    @PostMapping("/log")
    public String receiveLog(@RequestBody Log log) {
        System.out.println("Received log: " + log);
        // Simpan log ke database atau file jika diperlukan
        return "Log received";
    }
}
