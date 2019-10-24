import { JsonplaceholderService } from './../service/jsonplaceholder.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-jsonplaceholder',
  templateUrl: './jsonplaceholder.component.html',
  styleUrls: ['./jsonplaceholder.component.scss']
})
export class JsonplaceholderComponent implements OnInit {
  post;
  posts;
  usuarios;
  usuarioSelecionado;

  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  });

  constructor(private jsonplaceholderService: JsonplaceholderService) { }

  ngOnInit() {
    // this.jsonplaceholderService.executarOperacao();
    this.jsonplaceholderService.buscarUsuarios()
      .subscribe(retorno => (this.usuarios = retorno));
    console.log(this.usuarios);

  }



  changeUsuario() {
    this.jsonplaceholderService.buscarPost(this.usuarioSelecionado.id)
      .subscribe(retorno => (this.posts = retorno));

  }

  inserirPost() {
    if (this.postForm.valid) {
      const post = this.postForm.value;

      post.UserId = this.usuarioSelecionado.id;
      this.jsonplaceholderService.enviarPost(post).subscribe(retorno => this.posts.push(retorno));
      alert('Texto enviado com sucesso!');
    }
  }
}