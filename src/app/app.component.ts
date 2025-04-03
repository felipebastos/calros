import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'Calros - Um app de amor';

  seletor: number = 0;
  lista: string[] = ['Calros - Um app de amor', 'Calros - Um cheiro no sovaco'];

  mudaTitle() {
    this.seletor = this.seletor ? 0 : 1;

    this.title = this.lista[this.seletor];
  }

  bagunca(event: MouseEvent) {
    (event.target as HTMLElement).style.backgroundColor = `rgba(${
      Math.random() * 255
    }, ${Math.random() * 255},${Math.random() * 255}, 0.6)`;
  }
}
