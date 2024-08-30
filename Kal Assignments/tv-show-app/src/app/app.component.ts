import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ResultComponent} from './result/result.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tv-show-app';
}


