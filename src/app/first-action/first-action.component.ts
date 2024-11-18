import { Component } from '@angular/core';

@Component({
  selector: 'app-first-action',
  standalone: true,
  imports: [],
  templateUrl: './first-action.component.html',
  styleUrl: './first-action.component.scss',
})
export class FirstActionComponent {
  name: string = 'Abalala';
  email: string = 'First@action';
  message: string = 'Forcus on yourself';
}
