package com.myschool.myschool.repositories;

import com.myschool.myschool.entities.Announcement;
import com.myschool.myschool.entities.User;
import org.hibernate.sql.Select;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface IUserRepository extends JpaRepository<User, Long> {

    @Query("Select u from User u where u.username=:username and u.organization.id=:organizationId")
    Optional<User> findByUserNameAndOrgId(String username, Long organizationId);

    @Query("Select u From Event u where u.organization.id=:orgId")
    List<User> getAllByOrgId(long orgId);
}
