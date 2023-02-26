package com.myschool.myschool.repositories;

import com.myschool.myschool.entities.Organization;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrganizationRepository extends JpaRepository<Organization, Long> {
}

