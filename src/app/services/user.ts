import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUser, UpdateUser, UserResponse } from '../shared/model/user';
import { PaginatedResponse } from '../shared/model/paginatedResponse';

@Injectable({
  providedIn: 'root',
})
export class User {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl + 'users';

  getUsers(
    page: number = 0,
    size: number = 10,
    sortBy: string = 'id',
    direction: string = 'ASC',
  ): Observable<PaginatedResponse<UserResponse>> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('sortBy', sortBy)
      .set('direction', direction);
    return this.http.get<PaginatedResponse<UserResponse>>(`${this.apiUrl}`, {
      params,
    });
  }

  getUserById(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.apiUrl}/${id}`);
  }

  getUserByEmail(email: string): Observable<UserResponse> {
    const params = new HttpParams().set('email', email); // Encode special caracter
    return this.http.get<UserResponse>(`${this.apiUrl}/by-email`, {
      params,
    });
  }

  createUser(user: CreateUser): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.apiUrl}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateUser(id: number, user: UpdateUser): Observable<UserResponse> {
    return this.http.put<UserResponse>(`${this.apiUrl}/${id}`, user);
  }
}
