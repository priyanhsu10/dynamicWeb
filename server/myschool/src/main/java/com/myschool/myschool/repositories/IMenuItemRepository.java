package com.myschool.myschool.repositories;

import com.myschool.myschool.entities.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IMenuItemRepository extends JpaRepository<MenuItem, Long> {
}
