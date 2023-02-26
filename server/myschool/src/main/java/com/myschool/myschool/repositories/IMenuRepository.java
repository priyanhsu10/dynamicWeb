package com.myschool.myschool.repositories;

import com.myschool.myschool.entities.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IMenuRepository extends JpaRepository<Menu, Long> {
}
