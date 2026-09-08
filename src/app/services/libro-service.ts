import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ResultadosApi} from '../models/libro';
@Injectable({
  providedIn: 'root',
})
export class LibroService {
   private API_LIBROS= 'https://gutendex.com/books/';
   
   private http = inject(HttpClient);
   obtenerLibros():Observable<ResultadosApi>{
    return this.http.get<ResultadosApi>(this.API_LIBROS);
   }

}
