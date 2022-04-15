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

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  }

  getToken(): string {
    return localStorage.getItem('access_token') || 'unable to get token';
  }

  private setSession(res: any): void {
    const ltoken = this.parseJwt(res.token);
    const expiresAt = ltoken.exp * 1000;

    localStorage.setItem('access_token', res.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt));
  }

  private parseJwt = (token: string) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
}
