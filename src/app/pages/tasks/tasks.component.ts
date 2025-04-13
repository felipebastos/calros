import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Observable } from 'rxjs';
import { NewTask, Task } from '../../shared/task';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButton } from '@angular/material/button';

export const MaterialModules = [
  MatButton,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
];

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...MaterialModules],
  providers: [provideNativeDateAdapter()],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.sass',
})
export class TasksComponent implements OnInit {
  tarefas: Observable<Task[]> = new Observable<Task[]>();

  novaTarefa = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    created_at: new FormControl(new Date().toISOString().slice(0, 10)),
    due_by: new FormControl(new Date().toISOString().slice(0, 10)),
  });

  // Para a tabela
  colunas = ['id', 'title', 'description', 'created_at', 'due_by'];

  constructor(private tservice: TaskService) {}

  ngOnInit(): void {
    this.tarefas = this.tservice.getAll();
  }

  addNova() {
    if (this.novaTarefa.valid) {
      let tarefa: NewTask = this.novaTarefa.value as NewTask;

      this.tservice.add(tarefa);
      this.novaTarefa.reset();
    }
  }
}
