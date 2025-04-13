import { Component } from '@angular/core';
import { CadastroService } from '../../pages/cadastro/cadastro.service';
import { Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-componente1',
  imports: [
    AsyncPipe,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.sass',
})
export class Componente1Component {
  numero: Observable<number> = new Observable<number>();
  nome: Observable<{ name: string }> = new Observable<{ name: string }>();

  id: number = 0;

  constructor(private cadastro: CadastroService) {
    this.numero = this.cadastro.get();
  }

  clicou() {
    this.nome = this.cadastro
      .getData(this.id)
      .pipe(tap((data) => console.log(data)));
  }
}
