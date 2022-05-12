import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
//paginationmodule
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MoneypotService } from './moneypot.service';
import { MoneypotComponent } from './moneypot/moneypot.component';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { EventChartsComponent } from './event-charts/event-charts.component';
import { QrcodeEventComponent } from './qrcode-event/qrcode-event.component';
import { BrowserModule } from '@angular/platform-browser';
import { UploadmoneyComponent } from './uploadmoney/uploadmoney.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({ 
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
