import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { LayoutService } from './layout.service';


@Component({
  selector: 'ngx-pages',
  template: `
      <nb-layout>
        <nb-layout-header>
        <div class="header-container"
        [class.left]="position === 'normal'"
        [class.right]="position === 'inverse'">
          <div class="logo-containter"><a (click)="toggleSidebar()" href="#" class="navigation"><i class="nb-menu"></i></a>
          </div>            
        </div>

        <!-- Insert header here -->
        <div class="header-container">
        <nb-actions
          size="medium"
          [class.left]="position === 'normal'"
          [class.right]="position === 'inverse'">
          <nb-action >
          <nb-user [name]="'Andrew Berania'"></nb-user>
          </nb-action>
          <nb-action class="control-item" disabled icon="nb-notifications"></nb-action>
          <nb-action class="control-item" icon="nb-email"></nb-action>
          <nb-action class="control-item">
            <nb-search type="rotate-layout"></nb-search>
          </nb-action>
          <nb-action class="control-item" title="Add new post" >
          <a [routerLink]="['/pages/add-edit-post']"><i class="nb-plus plus-customized" ></i></a>
        </nb-action>
        </nb-actions>
        </div>        
        </nb-layout-header>

            <nb-sidebar>
            <nb-menu [items]="menu"></nb-menu>
            </nb-sidebar>

        <nb-layout-column>
            
            <router-outlet></router-outlet>
            
        </nb-layout-column>

        <nb-layout-footer>
        <!-- Insert footer here -->
        </nb-layout-footer>
      </nb-layout>
  `,
})

export class PagesComponent {

  menu = MENU_ITEMS;


  constructor( private sidebarService: NbSidebarService,
               private layoutService: LayoutService){

  }

  toggleSidebar(): boolean {

    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  } 


}
