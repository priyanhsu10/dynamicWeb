package com.myschool.myschool.repositories;

import com.myschool.myschool.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Long> {
}
