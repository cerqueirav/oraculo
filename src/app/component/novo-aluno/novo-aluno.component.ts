import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"

export interface Aluno {
  id?:string
  nome:string
  cpf:string
  email: string
  telefone: string
  endereco: string
}

@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.scss']
})
export class NovoAlunoComponent implements OnInit {

  constructor(private dialogService:MatDialogRef<NovoAlunoComponent> ,@Inject(MAT_DIALOG_DATA) public data: Aluno) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogService.close()
  }
}
