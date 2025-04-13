import { Component } from '@angular/core';
import { CadastroService } from '../../pages/cadastro/cadastro.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-componente2',
  imports: [AsyncPipe],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.sass',
})
export class Componente2Component {
  numero: Observable<number> = new Observable<number>();
  constructor(private cadastro: CadastroService) {
    this.numero = this.cadastro.get();
  }

  clicou() {
    this.cadastro.inc();
  }
}
