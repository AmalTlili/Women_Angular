import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {CertificateComponent} from '../../Certificate/Certificate.component';
import {TrainingsComponent} from '../../Trainings/Trainings.component';
import {MoneypotComponent} from '../../moneypot/moneypot.component';
import {EventsCalendarComponent} from '../../events-calendar/events-calendar.component';
import {QrcodeEventComponent} from '../../qrcode-event/qrcode-event.component';
import {UploadmoneyComponent} from '../../uploadmoney/uploadmoney.component';
import {EventsComponent} from '../../events/events.component';
import {AgmCoreModule} from '@agm/core';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {FullCalendarModule} from '@fullcalendar/angular';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';
import {AngularFileUploaderModule} from 'angular-file-uploader';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCwMrp5MhS-JQ9f5v2P-s7K9L0dcIqWcrM',
      libraries: ['places']
    }),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgbModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FullCalendarModule,
    ZXingScannerModule,
    AngularFileUploaderModule,
    MatGoogleMapsAutocompleteModule,
    MatIconModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
      CertificateComponent,
      TrainingsComponent,
    MoneypotComponent,
    EventsComponent,
    UserProfileComponent,
    EventsCalendarComponent,
    QrcodeEventComponent,
    MapsComponent,
    UploadmoneyComponent
  ]
})

export class AdminLayoutModule {}
