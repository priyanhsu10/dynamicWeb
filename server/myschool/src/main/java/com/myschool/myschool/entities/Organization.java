package com.myschool.myschool.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tblOrg", schema = "public")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Organization {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    private String logo;
    private String address;
    @OneToMany(mappedBy = "organization", fetch = FetchType.LAZY)
    private List<Announcement> announcementList = new ArrayList<>();

}
