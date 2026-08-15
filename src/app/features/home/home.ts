import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Hero } from '../../shared/hero/hero';
import { Specialties } from '../../shared/specialties/specialties';
@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, Hero, Specialties], 
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
