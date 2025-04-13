import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  url_root: string = 'http://swapi.dev/api/people/';

  private numero: Observable<number> = new Observable<number>();

  constructor(private cliente: HttpClient) {}

  inc() {
    this.numero = this.numero.pipe(switchMap((number) => of(number++)));
  }

  dec() {
    //this.numero--;
  }

  get(): Observable<number> {
    return this.numero;
  }

  getData(id: number): Observable<{ name: string }> {
    return this.cliente.get<{ name: string }>(`${this.url_root}${id}/`);
  }
}
