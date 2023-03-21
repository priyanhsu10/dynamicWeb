package com.myschool.myschool.services.impl;

import com.myschool.myschool.entities.MenuItem;
import com.myschool.myschool.models.MenuDto;
import com.myschool.myschool.models.MenuItemDto;
import com.myschool.myschool.models.menu.CreateMenuDto;
import com.myschool.myschool.models.menu.UpdateMenuDto;
import com.myschool.myschool.repositories.IMenuItemRepository;
import com.myschool.myschool.repositories.IOrganizationRepository;
import com.myschool.myschool.repositories.IPageRepository;
import com.myschool.myschool.repositories.IQuickLinkRepository;
import com.myschool.myschool.services.Interfaces.IMenuService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class MenuService implements IMenuService {
    private  final IMenuItemRepository menuItemRepository;
    private  final IPageRepository pageRepository;
    private  final IQuickLinkRepository quickLinkRepository;
    private  final IOrganizationRepository organizationRepository;
    @Override
    public List<MenuItem> getAllByOrgId(long orgId) {
        return menuItemRepository.findAllByOrganization(orgId);

    }

    @Override
    public void create(CreateMenuDto createMenuDto) {
          var menuItem= new MenuItem();
          menuItem.setRoot(createMenuDto.isRoot());
          menuItem.setTitle(createMenuDto.getTitle());
          menuItem.setActive(true);
          menuItem.setDescription(createMenuDto.getDescription());
          menuItem.setOrganization(organizationRepository.getReferenceById(createMenuDto.getOrganizationId()));
        if (createMenuDto.isRoot()) {
            menuItem.setParent(menuItemRepository.getReferenceById(createMenuDto.getParentId()));
        } else {
            if(createMenuDto.getPageId()>0 ){
                menuItem.setPage(pageRepository.getReferenceById(createMenuDto.getPageId()));
            }else if(createMenuDto.getLinkId()>0){
                menuItem.setLink(     quickLinkRepository.getReferenceById(createMenuDto.getLinkId()));
            }
        }

        menuItemRepository.save(menuItem);
    }

    @Override
    public void update(UpdateMenuDto updateMenuDto) {
        var menuItem= menuItemRepository.findById(updateMenuDto.getId()).orElseThrow(()->new RuntimeException("Menu not found"));

        menuItem.setTitle(updateMenuDto.getTitle());
        menuItem.setActive(true);
        menuItem.setDescription(updateMenuDto.getDescription());
        if(!updateMenuDto.isRoot()){
            if(updateMenuDto.getPageId()>0 ){
                menuItem.setPage(pageRepository.getReferenceById(updateMenuDto.getPageId()));
            }else if(updateMenuDto.getLinkId()>0){
                menuItem.setLink(     quickLinkRepository.getReferenceById(updateMenuDto.getLinkId()));
            }
        }else{

            menuItem.setParent(menuItemRepository.getReferenceById(updateMenuDto.getParentId()));
        }

        menuItemRepository.save(menuItem);
    }

    @Override
    public boolean makeInactive(long MenuId) {
        return false;
    }
}

