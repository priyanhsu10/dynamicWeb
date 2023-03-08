package com.myschool.myschool.repositories;

import com.myschool.myschool.entities.Announcement;
import com.myschool.myschool.entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IEventRepository extends JpaRepository<Event, Long> {
    @Query("Select u From Event u where u.organization.id=:orgId")
    List<Event> getAllAnnouncementByOrgId(long orgId);
}
