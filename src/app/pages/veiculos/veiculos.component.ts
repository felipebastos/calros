import { Component, OnInit } from '@angular/core';
import { VeiculosService } from './veiculos.service';
import { Observable } from 'rxjs';
import { Veiculo } from './interfaces';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-veiculos',
  imports: [
    AsyncPipe,
    CommonModule,
    ReactiveFormsModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.sass',
})
export class VeiculosComponent implements OnInit {
  veiculos$: Observable<Veiculo[]> = new Observable<Veiculo[]>();

  nomeNovo = '';

  constructor(private veiculoService: VeiculosService) {
    this.loadVeiculos();
  }

  ngOnInit(): void {
    this.loadVeiculos();
  }

  loadVeiculos() {
    this.veiculos$ = this.veiculoService.getVeiculos();
  }

  addNovo() {
    this.veiculoService.addVeiculo({ valor: this.nomeNovo });
    this.loadVeiculos();
  }

  remove(id: string) {
    this.veiculoService.delVeiculo(id);
  }
}
