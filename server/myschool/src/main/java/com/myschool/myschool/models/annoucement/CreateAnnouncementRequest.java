package com.myschool.myschool.models.annoucement;

import com.myschool.myschool.models.OrganizationDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor

public class CreateAnnouncementRequest {
    private String title;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private Long organizationId;
}
