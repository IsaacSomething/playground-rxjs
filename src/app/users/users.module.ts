import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
const moduleImports = [FlexLayoutModule];

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
const materialImports = [MatCardModule, MatIconModule, MatButtonModule, MatProgressBarModule];

import { HeaderComponent } from '@base/components/header';
const standaloneImports = [HeaderComponent];

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, ...materialImports, ...moduleImports, ...standaloneImports]
})
export class UsersModule {}
