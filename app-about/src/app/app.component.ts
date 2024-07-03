import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from './material/material.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,MaterialModule,MatSlideToggleModule,MatChipsModule,MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './app.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'app-about';
  constructor() { }


  ngOnInit(): void {

  }
  teamMembers: any[] = [
    {
      name: 'John Doe',
      position: 'CEO',
      description: 'John is the driving force behind our company, with over 20 years of experience in the industry.',
      image: 'assets/team1.jpg'
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      description: 'Jane leads our technology team, ensuring we stay ahead of the curve with innovative solutions.',
      image: 'assets/team2.jpg'
    }
    // Add more team members as needed
  ];
}
