import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.sass',
})
export class CadastroComponent {
  cadastraForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(16)]),
    data: new FormControl(''),
  });

  personagem_nome = '';

  constructor(private cliente: HttpClient) {}

  mostra(): void {
    this.cliente
      .get<{ name: string }>(
        `https://swapi.dev/api/people/${this.cadastraForm.controls.nome.value}/`
      )
      .subscribe((resp) => (this.personagem_nome = resp.name));
  }
}
