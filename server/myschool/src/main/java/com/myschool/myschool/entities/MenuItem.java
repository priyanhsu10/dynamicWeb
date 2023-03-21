package com.myschool.myschool.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tblmenuitems", schema = "public")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuItem {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String title;
    private String translateKey;
    private String Description;
    private boolean isRoot;
    private boolean isActive;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "parent_id")
    private MenuItem parent;

    @OneToMany(fetch = FetchType.EAGER)
    private List<MenuItem> menuItemList = new ArrayList<>();
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "page_id")
    private Page page;
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "link_id")
    private QuickLink link;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "org_id")
    private Organization organization;
}
