import { Component, OnInit } from '@angular/core';
import { delay, Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ITodoItem } from '../models/todo-itemmodel';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor(
    private todoService: TodoService,
    private spinnerService: SpinnerService
  ) {}

  todoSubscription!: Subscription;
  todoList!: ITodoItem[];

  ngOnInit(): void {
    this.spinnerService.showSpinner();

    this.todoSubscription = this.todoService.getTodos().subscribe((todos) => {
      this.todoList = todos;
    });

    this.spinnerService
      .getSpinnerState$()
      .pipe(delay(2000))
      .subscribe((state: boolean) => {
        this.spinnerService.hideSpinner();
      });

    // this.spinnerService.hideSpinner();
    //I had some confusion with this. If possible, please explain. The state for spinner changes too fast.
  }
}
