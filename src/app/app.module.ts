import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { JsonplaceholderComponent } from './jsonplaceholder/jsonplaceholder.component';
import { HttpClientModule } from '@angular/common/http';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav';
import { CamelCasePipe } from './pipe/camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    JsonplaceholderComponent,
    ExemplosPipesComponent,
    ProdutosComponent,
    CamelCasePipe
  ],
  imports: [
  
  BrowserModule,
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatSidenavModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
