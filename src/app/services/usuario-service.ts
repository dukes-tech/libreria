import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private API_USUARIOS ='https://evaluacionparcia1-default-rtdb.firebaseio.com'

  private http = inject(HttpClient);

   //GET
  getUsuarios():Observable<Usuario[]>{
    
    
    return this.http.get<{[key:string]:Usuario}>(`${this.API_USUARIOS}/usuarios.json`).pipe(
      map(respuesta => {
        if(!respuesta){
          return [];
        }
        return Object.keys(respuesta).map(id=>{
          const usuarioConId = {...respuesta[id], id:id};

          return usuarioConId;
        });
      })
    )
  }

  //POST
  postUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.API_USUARIOS}/usuarios.json`, usuario);
  }

  // buscar por id
  getUsuarioById(id:string):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.API_USUARIOS}/usuarios.json/${id}`)
  }
// PUT

putUsuario(id:string, usuario:Usuario):Observable<Usuario>{
  return this.http.put<Usuario>(`${this.API_USUARIOS}/usuarios/${id}.json`,usuario);
}
//delete
deleteUsuario(id:string):Observable<void>{
  return this.http.delete<void>(`${this.API_USUARIOS}/usuarios/${id}.json`);
}
}
