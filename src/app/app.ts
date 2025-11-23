import { Component, signal } from '@angular/core';
import {  CommonModule  } from '@angular/common';

import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [CommonModule,
   RouterOutlet, 
    RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primerproyecto');
}
