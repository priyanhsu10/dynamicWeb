package com.myschool.myschool.services.Interfaces;

import com.myschool.myschool.entities.MenuItem;
import com.myschool.myschool.models.MenuItemDto;
import com.myschool.myschool.models.menu.CreateMenuDto;
import com.myschool.myschool.models.menu.UpdateMenuDto;

import java.util.List;

public interface IMenuService {
    List<MenuItem> getAllByOrgId(long orgId);

    void create(CreateMenuDto createMenuDto);

    void update(UpdateMenuDto updateMenuDto);
    boolean   makeInactive(long MenuId);
}
