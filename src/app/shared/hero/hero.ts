import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  @Input() titulo!:string;
  @Input() contenido!:string;
  @Input() imagen!:string;
}
