import { Component } from '@angular/core';

@Component({
  selector: 'app-specialties',
  imports: [],
  templateUrl: './specialties.html',
  styleUrl: './specialties.css',
})
export class Specialties {
subtitutlo: string = 'Puedes encontrar libros de todo los gustos';

especialidadSeleccionada:string = '';

especialidades=[{
                  id:1,
                  nombre :"Novela",
                  descripcion:"La novela es un género literario que se caracteriza por ser una narración extensa y compleja, que desarrolla una historia ficticia a través de la interacción de personajes, eventos y conflictos.",
                  imagen:"https://quelibroleo.com/images/libros/libro-1743493074.jpg",
                  activo:true
                },
                {
                  id:2,
                  nombre :"Ciencia Ficción",
                  descripcion:"La ciencia ficción es un género literario y cinematográfico que se centra en la exploración de conceptos científicos, tecnológicos y futuristas.",
                  imagen:"https://quelibroleo.com/images/libros/libro-1588590514.jpg",
                  activo:false
                },
                {
                  id:3,
                  nombre :"Misterio",
                  descripcion:"El misterio es un género literario y cinematográfico que se centra en la creación de suspense, intriga y enigmas que mantienen al lector o espectador en vilo.",
                  imagen:"https://template.canva.com/EAGfY8ta6hc/1/0/1003w-RIjMyRhdwSo.jpg",
                  activo:true
                }
              ];

  especialidadesFiltradas = this.especialidades.filter(especialidad => especialidad);
  //funcion para seleccionar una especialidad
  seleccionarEspecialidad(nombre:string){ 
    this.especialidadSeleccionada = nombre;
  }
  //funcion para buscar el libro
  buscar(event: Event){
    const libroBuscar = (event.target as HTMLInputElement).value.toLowerCase();
    this.subtitutlo = `Resultados para : ${libroBuscar}`;
    this.especialidadesFiltradas = this.especialidades.filter(especialidad => especialidad.nombre.toLowerCase().includes(libroBuscar) && especialidad.activo);
  }
}
