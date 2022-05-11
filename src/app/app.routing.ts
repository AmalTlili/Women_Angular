import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChartsComponent } from './charts/charts.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { GoogleComponent } from './google/google.component';
import { EmailComponent } from './email/email.component';
import { ReconnaissanceComponent } from './reconnaissance/reconnaissance.component';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { SMSComponent } from './sms/sms.component';
import { PopupComponent } from './popup/popup.component';




const routes: Routes =[
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },

  {
  
    
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'charts',component:ChartsComponent},
  { path: 'upload', component: UploadFileComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'google', component: GoogleComponent },
  { path: 'email', component: EmailComponent },
  { path: 'reconnaisance', component: ReconnaissanceComponent },
  {path:'calendar',component:CalendarComponent},
  {path:'sms',component:SMSComponent},
  {path:'notification',component:PopupComponent}
  

 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
