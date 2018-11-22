import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { NbMenuService, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  template: `
      <nb-layout>
        <nb-layout-header>
            <div class="logo-containter">
            <a (click)="toggleSidebar()" href="#" icon="nb-notifications" class="navigation"><i class="nb-menu"></i></a>
            </div>    
        <!-- Insert header here -->
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


  constructor( private sidebarService: NbSidebarService){

  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  } 


}
