import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import {ProgressBarModule} from 'angular-progress-bar';
import { ComponentsModule } from './components/components.module';
import { UserListComponent } from './user-list/user-list.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { EmailComponent } from './email/email.component';
import { CrudComponent } from './crud/crud.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ReconnaissanceComponent } from './reconnaissance/reconnaissance.component';
import { ProfileComponent } from './profile/profile.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { SMSComponent } from './sms/sms.component';
import { PopupComponent } from './popup/popup.component';
import { QRCodeModule } from 'angular2-qrcode';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { BubblechartComponent } from './bubblechart/bubblechart.component';








FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ComponentsModule,
    AppRoutingModule,
    FullCalendarModule,
    ModalModule.forRoot(), ProgressBarModule,
    Ng2SearchPipeModule,QRCodeModule,
    SocialLoginModule
    
   
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    RegistrationComponent,
    LoginComponent,
    LoginsuccessComponent,
    CalendarComponent,
    UserListComponent,
    UploadFileComponent,
    EmailComponent,
    CrudComponent,
    AdduserComponent,
    ReconnaissanceComponent,
    ProfileComponent,
    UpdateuserComponent,
    SMSComponent,
    PopupComponent,
    QrcodeComponent,
    BubblechartComponent,
  
   

 
   
    
    
   

   
   
  

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'clientId:53077753982-kmfuotmjabnss7lv8bpevp8o397f42lf.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('594429171551069')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
