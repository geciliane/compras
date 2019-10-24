import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { JsonplaceholderComponent } from './jsonplaceholder/jsonplaceholder.component';
import { AppComponent } from './app.component';


const routes: Routes = [
{
  path:'exemplos-pipes',
  component: ExemplosPipesComponent
},

{
  path:'produtos',
  component: ProdutosComponent
},

{
path:'jsonplaceholder',
component:JsonplaceholderComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
