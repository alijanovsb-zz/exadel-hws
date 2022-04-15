import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodoItem } from '../models/todo-itemmodel';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  todoSubscription!: Subscription;
  todoList!: ITodoItem[];

  ngOnInit(): void {
    this.todoSubscription = this.todoService.getTodos().subscribe((todos) => {
      this.todoList = todos;
    });
  }
}
