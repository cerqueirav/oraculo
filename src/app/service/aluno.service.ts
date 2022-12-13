import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Aluno } from '../component/novo-aluno/novo-aluno.component';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  constructor(private fireService: AngularFirestore) {}

  createAluno(aluno:Aluno) {
    let newDoc = this.fireService.collection('Aluno').doc().ref;
    aluno.id = newDoc.id;
    newDoc.set(aluno);
  }

  fetchAluno() {
    return this.fireService.collection('Aluno').snapshotChanges()
  }

  updateAluno(aluno:Aluno) {
    return this.fireService.collection('Aluno').doc(aluno.id).update(aluno)
  }

  deleteAluno(aluno:Aluno) {
    return this.fireService.collection('Aluno').doc(aluno.id).delete()
  }
}
