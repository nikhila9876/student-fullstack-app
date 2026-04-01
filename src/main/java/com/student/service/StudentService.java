package com.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.entity.Student;
import com.student.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public Student add(Student s){ return repo.save(s); }

    public List<Student> getAll(){ return repo.findAll(); }

    public Student update(int id, Student s){
        Student st = repo.findById(id).orElse(null);
        if(st!=null){
            st.setName(s.getName());
            st.setEmail(s.getEmail());
            st.setCourse(s.getCourse());
            return repo.save(st);
        }
        return null;
    }

    public void delete(int id){ repo.deleteById(id); }
}