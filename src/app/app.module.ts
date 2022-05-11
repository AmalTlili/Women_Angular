import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {NgbDateParserFormatter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {NgbDateCustomParserFormatter} from './typography/NgbDateCustomParserFormatter';
import {NgxPaginationModule} from 'ngx-pagination';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgxPaginationModule,
      NgbModule,
    BrowserModule,
    Ng2SearchPipeModule,
    ZXingScannerModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UploadFileComponent

  ],
  providers: [
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

