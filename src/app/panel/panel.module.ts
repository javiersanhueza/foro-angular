// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PanelRoutingModule } from './panel-routing.module';

// Componentes
import { AddComponent } from './components/add/add.component';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';

// Servicios

// NgModule
@NgModule({
  declarations: [
    AddComponent,
    MainComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PanelRoutingModule
  ],
  exports: [
    AddComponent,
    MainComponent,
    ListComponent,
    EditComponent
  ],
  providers: []
})

export class PanelModule { }
