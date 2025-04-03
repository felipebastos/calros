import { AfterViewInit, Component, inject, Input } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass',
})
export class AboutComponent {
  @Input()
  set frase(frase: string) {
    this.frase_ = frase;
  }

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  frase_ = 'Nada feito';

  constructor() {}
}
