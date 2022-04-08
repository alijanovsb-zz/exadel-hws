import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { APP_CONFIG } from '../../app.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }) {
    return this.http
      .post(`${APP_CONFIG.api.url}/login`, credentials)
      .pipe(tap((res: any) => this.setSession(res)));
  }

  randomCheck() {
    return this.http.post(`${APP_CONFIG.api.url}/random`, {
      test: 'test',
    });
  }

  isLoggedIn(): boolean {
    return new Date().getTime() < Number(localStorage.getItem('expires_at'));
  }
  //I know that I should be using a backend for this, but I'm not sure how to do it yet.

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  }

  getToken(): string {
    return localStorage.getItem('access_token') || 'unable to get token';
  }

  private setSession(res: any): void {
    const expiresAt = Date.now() + Number(res.expiresIn);
    localStorage.setItem('access_token', res.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt));
  }
}
