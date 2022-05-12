import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Forum',  icon: 'chat', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/events', title: 'Events',  icon:'content_paste', class: '' },
    { path: '/table-list', title: 'MoneyPot',  icon:'content_paste', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/moneypot', title: 'MoneyPot',  icon:'content_paste', class: '' },

    { path: '/typography', title: 'Training',  icon:'library_books', class: '' },
    { path: '/Trainings', title: 'Trainings',  icon:'library_books', class: '' },
    { path: '/Certificate', title: 'Certificate',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Help area',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Jobs',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/login', title: 'Log Out',  icon:'unarchive', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
