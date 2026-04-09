package com.student.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.student.entity.User;
import com.student.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User register(User user){
        return repo.save(user);
    }

    public User login(String username,String password){
        return repo.findByUsernameAndPassword(username,password);
    }

    public User getUser(String username){
        return repo.findByUsername(username);
    }
}