import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TodoComponent, TodoListComponent],
  imports: [CommonModule, SharedModule],
  exports: [TodoComponent],
})
export class TodoModule {}
