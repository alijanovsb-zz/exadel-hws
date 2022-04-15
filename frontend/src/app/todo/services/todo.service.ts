import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from 'src/app/app.config';
import { ITodoItem } from '../models/todo-itemmodel';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getTodos() {
    return this.httpClient.get<ITodoItem[]>(
      `${APP_CONFIG.api.url}todos/getTodos`
    );
  }
}
