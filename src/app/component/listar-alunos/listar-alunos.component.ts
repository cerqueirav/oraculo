import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/service/aluno.service';
import { Aluno, NovoAlunoComponent } from '../novo-aluno/novo-aluno.component';
import { MatDialog } from "@angular/material/dialog";
import { ExcelService } from 'src/app/service/excel.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.scss']
})
export class ListarAlunosComponent implements OnInit {
  title = 'Oraculo';
  alunoList!: Aluno[];

  constructor(
    private dialogService: MatDialog,
    private alunoService: AlunoService,
    private excelService: ExcelService,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.alunoService.fetchAluno().subscribe((alunos: any[]) => {
      this.alunoList = alunos.map(alunoItem => {
        const data = alunoItem.payload.doc.data() as Aluno
        const id = alunoItem.payload.doc.id
        return { id, ...data }
      })
    })
  }

  onAdd() {
    const dialogRef = this.dialogService.open(NovoAlunoComponent, {
      width: '400px',
      data: {
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        endereco: ''
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.alunoService.createAluno(res);
      }
    });
  }

  onEdit(item: Aluno) {
    const dialogRef = this.dialogService.open(NovoAlunoComponent, {
      width: '400px',
      data: { ...item },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.alunoService.updateAluno(res).then((aluno: any) => console.log(aluno));
      }
    });
  }

  onDelete(item: Aluno) {
    this.alunoService.deleteAluno(item)
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.alunoList, 'sample');
  }

  logout() {
    this.authService.SignOut();
    this.router.navigate(['']);
  }
}
