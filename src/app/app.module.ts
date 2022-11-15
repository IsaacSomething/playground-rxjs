import { NgModule } from '@angular/core';
import { DataService } from '@base/services/data-access';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@base/app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ToolbarModule } from '@base/components/toolbar';
import { MenuModule } from '@base/components/menu';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
const moduleImports = [
  BrowserModule,
  HttpClientModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  LayoutModule,
  ToolbarModule,
  MenuModule,
  HttpClientInMemoryWebApiModule.forRoot(DataService, {
    delay: 0,
    dataEncapsulation: false
    /* passThruUnknownUrl: true  */
  })
];

import { MatSidenavModule } from '@angular/material/sidenav';
const materialImports = [MatSidenavModule];

import { MessagesComponent } from '@base/components/messages';
import { LoaderComponent } from '@base/components/loader';
const standaloneComponents = [MessagesComponent, LoaderComponent];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [...materialImports, ...moduleImports, ...standaloneComponents],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
