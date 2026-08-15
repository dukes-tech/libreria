import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './features/home/home';
import { Nav } from './shared/nav/nav';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('libreria');
}
