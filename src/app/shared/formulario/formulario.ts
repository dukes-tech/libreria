import { Component, inject, signal } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  private usuarioService = inject(UsuarioService);
  //variable apra controlar put o past
  editando = false;

  listaUsuarios = signal<Usuario[]>([]);

  nuevoUsuario: Usuario={
    nombre:'',
    email:'',
    password:''
  }

  ngOnInit(){
    this.obtenerUsuarios();
  }

  //Metodo para traer los usuarios a la tabla
  obtenerUsuarios(){
    this.usuarioService.getUsuarios().subscribe(datos =>{
      this.listaUsuarios.set(datos)
    });
  }
  //eliminar
  eliminarUsuario(id:string){
    if(confirm('seguro de eliminar el registro?'))
    {
      this.usuarioService.deleteUsuario(id).subscribe(()=> {
        this.listaUsuarios.set(this.listaUsuarios().filter(u=> u.id !== id));
      })
    }
  }
  //editar usuario
  editarUsuario(usuario: Usuario){
    this.editando=true;
    this.nuevoUsuario={...usuario};
  }

  //Metodo registrar usuario
  registrarUsuario(){
    if(this.editando && this.nuevoUsuario.id)
    {
      this.usuarioService.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(()=>{
        this.obtenerUsuarios();
        this.limpiarFormulario();
      });
    }
    else
    {
      this.usuarioService.postUsuario(this.nuevoUsuario).subscribe(()=>{
        this.obtenerUsuarios();
        this.limpiarFormulario();
      });
    }
   
  }


  //limpiar fomrulario
  limpiarFormulario()
  {
    this.editando=false;
    this.nuevoUsuario={nombre:'', email:'',password:''}
  }
}
