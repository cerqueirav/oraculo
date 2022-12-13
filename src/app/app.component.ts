import { AlunoService } from './service/aluno.service';
import { Aluno, NovoAlunoComponent } from './component/novo-aluno/novo-aluno.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Oraculo';

  constructor(
  ) {}

  ngOnInit(): void {
  }
}
