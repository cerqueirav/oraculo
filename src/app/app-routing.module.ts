import { ListarAlunosComponent } from './component/listar-alunos/listar-alunos.component';
import { NovoAlunoComponent } from './component/novo-aluno/novo-aluno.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'home',
    component: ListarAlunosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
