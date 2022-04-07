import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }) {
    console.log('login', credentials);
    return this.http
      .post('http://localhost:8000/auth/login', credentials)
      .pipe(tap((res: any) => this.setSession(res)));
  }

  healthCheck() {
    return this.http.post('http://localhost:8000/auth/health', {
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

  private setSession(res: any): void {
    const expiresAt = Date.now() + Number(res.expiresIn);
    localStorage.setItem('access_token', res.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt));

    console.log('expiresAt: ', expiresAt);
  }
}
