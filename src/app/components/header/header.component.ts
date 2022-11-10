import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title!: string;
}
