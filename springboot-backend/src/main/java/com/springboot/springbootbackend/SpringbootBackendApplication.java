package com.springboot.springbootbackend;

import com.springboot.springbootbackend.model.User;
import com.springboot.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootBackendApplication.class, args);
    }

    @Autowired
    private UserRepository userReposotory;

    @Override
    public void run(String... args) throws Exception {
        this.userReposotory.save(new User("Thushara", "Thiwanka", "thushara@gmail.com"));
        this.userReposotory.save(new User("Chamath", "Heshan", "chamath@gmail.com"));
        this.userReposotory.save(new User("Hiruni", "Hansima", "hiruni@gmail.com"));
    }
}
