import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog"
import {MatInputModule} from "@angular/material/input"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { NovoAlunoComponent } from './component/novo-aluno/novo-aluno.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire/compat"
import { AngularFirestoreModule } from "@angular/fire/compat/firestore"
import { environment } from 'src/environments/environment';
import { ExcelService } from './service/excel.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListarAlunosComponent } from './component/listar-alunos/listar-alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NovoAlunoComponent,
    ListarAlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgbModule,
    MatDialogModule
  ],
  providers: [
    {provide:MatDialogRef , useValue:{} },

    { provide: MAT_DIALOG_DATA, useValue: {} },
    ExcelService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
