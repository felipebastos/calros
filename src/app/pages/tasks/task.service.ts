import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, take } from 'rxjs';
import { NewTask, Task } from '../../shared/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tarefas$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  constructor(private cliente: HttpClient) {
    this.load();
  }

  getAll(): Observable<Task[]> {
    return this.tarefas$;
  }

  load(): void {
    this.cliente
      .get<Task[]>('http://localhost:3000/tasks')
      .subscribe((tarefas) => this.tarefas$.next(tarefas));
  }

  add(t: NewTask) {
    this.tarefas$
      .pipe(
        take(1),
        switchMap((tarefas) =>
          this.cliente
            .post<Task>('http://localhost:3000/tasks', t)
            .pipe(map((nova) => [...tarefas, nova]))
        )
      )
      .subscribe((tarefas) => this.tarefas$.next(tarefas));
  }
}
