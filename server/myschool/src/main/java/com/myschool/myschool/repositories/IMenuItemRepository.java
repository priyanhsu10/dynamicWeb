package com.myschool.myschool.repositories;

import com.myschool.myschool.entities.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IMenuItemRepository extends JpaRepository<MenuItem, Long> {

    @Query("Select u From MenuItem u where u.organization.id=:orgId")
    List<MenuItem> findAllByOrganization(long orgId);
}
