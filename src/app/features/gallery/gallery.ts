import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { signal } from '@angular/core';
import { Libro } from '../../models/libro';
import { LibroService } from '../../services/libro-service';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})


export class Gallery {
  private LibroService = inject(LibroService);
  libros = signal<Libro[]>([]);

  ngOnInit() {
    this.LibroService.obtenerLibros().subscribe(datos =>{
      this.libros.set(datos.results);
    });
  }
}
