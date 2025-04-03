import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-pessoal',
  imports: [AsyncPipe],
  templateUrl: './pessoal.component.html',
  styleUrl: './pessoal.component.sass',
})
export class PessoalComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  id: Observable<number> = new Observable<number>();

  ngOnInit(): void {
    this.id = this.route.paramMap.pipe(
      switchMap((params) => of((params.get('id') || 0) as number))
    );
  }
}
