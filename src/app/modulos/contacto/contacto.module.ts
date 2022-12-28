import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponetsComponent } from './componets/componets.component';
import { PagesComponent } from './pages/pages.component';
import { ComponentsComponent } from './components/components.component';



@NgModule({
  declarations: [
    ComponetsComponent,
    PagesComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactoModule { }
