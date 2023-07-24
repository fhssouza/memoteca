import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';

const routes: Routes = [
  { path: '', redirectTo: 'listarpensamento' , pathMatch: 'full'},
  { path: 'criarpensamento', component: CriarPensamentoComponent },
  { path: 'listarpensamento', component: ListarPensamentoComponent },
  { path: 'pensamentos/excluirpensamento/:id', component: ExcluirPensamentoComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
