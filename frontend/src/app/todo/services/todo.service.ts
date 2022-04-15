import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from 'src/app/app.config';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getTodos() {
    return this.httpClient.get(`${APP_CONFIG.api.url}/todos/getTodos`);
  }
}
