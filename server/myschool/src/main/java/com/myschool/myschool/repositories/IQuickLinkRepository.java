package com.myschool.myschool.repositories;

import com.myschool.myschool.entities.Page;
import com.myschool.myschool.entities.QuickLink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IQuickLinkRepository extends JpaRepository<QuickLink,Long> {
    @Query("Select u From QuickLink u where u.organization.id=:orgId")
    List<QuickLink> getAllLinksByOrgId(long orgId);
}
