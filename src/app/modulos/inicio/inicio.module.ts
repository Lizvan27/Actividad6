import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    PagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InicioModule { }
