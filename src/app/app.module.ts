import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InserirTarefaComponent } from './inserir-tarefa/inserir-tarefa.component';
import { TarefaCriadaComponent } from './tarefa-criada/tarefa-criada.component';
import { TarefaCompletaComponent } from './tarefa-completa/tarefa-completa.component';

@NgModule({
  declarations: [
    AppComponent,
    InserirTarefaComponent,
    TarefaCriadaComponent,
    TarefaCompletaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
