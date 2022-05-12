import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from 'app/login/login.component';
import { AdduserComponent } from 'app/adduser/adduser.component';
import { SMSComponent } from 'app/sms/sms.component';
import { UpdateuserComponent } from 'app/updateuser/updateuser.component';
import { PopupComponent } from 'app/popup/popup.component';
import { UploadFileComponent } from 'app/upload-file/upload-file.component';
import { TrainingsComponent } from 'app/Trainings/Trainings.component';
import {CertificateComponent} from '../../Certificate/Certificate.component';
import {UploadmoneyComponent} from '../../uploadmoney/uploadmoney.component';
import {EventsCalendarComponent} from '../../events-calendar/events-calendar.component';
import {EventsComponent} from '../../events/events.component';
import {MoneypotComponent} from '../../moneypot/moneypot.component';
import {JobComponent} from '../../job/job.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'table-list', component: TableListComponent},
    {path: 'typography', component: TypographyComponent},
    {path: 'Trainings', component: TrainingsComponent},
    {path: 'Certificate', component: CertificateComponent},
    {path: 'moneypot', component: MoneypotComponent},
    {path: 'job', component: JobComponent},
    {path: 'events', component: EventsComponent},
    {path: 'calendar', component: EventsCalendarComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'uploadmoney', component: UploadmoneyComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'notifications', component: PopupComponent},
    {path: 'adduser', component: AdduserComponent},
    {path: 'updateuser/:id', component: UpdateuserComponent},
    {path: 'sms', component: SMSComponent},
    {path: 'upload', component: UploadFileComponent},


];

