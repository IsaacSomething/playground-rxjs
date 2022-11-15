import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '@base/services/api';
import { MessagesService } from './messages.service';
import { tap } from 'rxjs';

@Component({
  selector: 'base-messages',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  showMessages = false;
  errors$ = this.messagesService.errors$.pipe(tap(() => (this.showMessages = true)));

  constructor(private messagesService: MessagesService, private apiService: ApiService) {}

  retry() {
    this.showMessages = false;
    this.apiService.retry$.next(true);
  }
}
