import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { merge, Observable, of, withLatestFrom } from 'rxjs';
import { Veiculo, VeiculoNovo } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class VeiculosService {
  url_root = 'http://localhost:3000/';

  veiculos: Observable<Veiculo[]> = new Observable<Veiculo[]>();

  constructor(private cliente: HttpClient) {
    this.reload();
  }

  reload() {
    this.veiculos = this.cliente.get<Veiculo[]>(this.url_root + 'veiculos');
  }

  getVeiculos(): Observable<Veiculo[]> {
    return this.veiculos;
  }

  addVeiculo(novo: VeiculoNovo) {
    this.cliente
      .post(this.url_root + 'veiculos', novo)
      .subscribe(() => this.reload());
  }

  delVeiculo(id: string) {
    this.cliente
      .delete(this.url_root + `veiculos/${id}`)
      .subscribe((valor) => console.log(valor));
  }
}
