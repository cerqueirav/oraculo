import { AlunoService } from './service/aluno.service';
import { Aluno, NovoAlunoComponent } from './component/novo-aluno/novo-aluno.component';
import { Component } from '@angular/core';

import {MatDialog } from "@angular/material/dialog"
import { ExcelService } from './service/excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Oraculo';
  alunoList!:Aluno[];

  constructor(
    private dialogService: MatDialog,
    private alunoService: AlunoService,
    private excelService:ExcelService
  ) {}

  ngOnInit(): void {
    this.alunoService.fetchAluno().subscribe((alunos: any[]) => {
      this.alunoList = alunos.map(alunoItem => {
        const data = alunoItem.payload.doc.data() as Aluno
        const id = alunoItem.payload.doc.id
        return {id , ...data}
      })
    })
  }

  onAdd() {
    const dialogRef = this.dialogService.open(NovoAlunoComponent, {
      width: '400px',
      data: {
        nome: '' ,
        cpf: ''
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.alunoService.createAluno(res);
      }
    });
  }


  onEdit(item:Aluno){
    const dialogRef = this.dialogService.open(NovoAlunoComponent, {
      width: '400px',
      data: {...item},
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.alunoService.updateAluno(res).then((aluno: any) => console.log(aluno));
      }
    });
  }

  onDelete(item:Aluno){
    this.alunoService.deleteAluno(item)
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.alunoList, 'sample');
  }
}
