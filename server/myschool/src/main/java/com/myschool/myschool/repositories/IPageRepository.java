package com.myschool.myschool.repositories;

import com.myschool.myschool.entities.Announcement;
import com.myschool.myschool.entities.Event;
import com.myschool.myschool.entities.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IPageRepository extends JpaRepository<Page, Long> {
    @Query("Select u From Page u where u.organization.id=:orgId")
    List<Page> getAllPageByOrgId(long orgId);
}
