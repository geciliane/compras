import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
usuarioSelecionado;
id;
  constructor(private http: HttpClient) { }

  executarOperacao() {
    console.log('Executar operação');
  }

  buscarUsuarios(): Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  buscarPost(idUsuario): Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts?userId='+idUsuario);
  }

  enviarPost(post){
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts',post);
  }
}
