import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import {
  ClientResponse,
  CreateClient,
  UpdateClient,
} from '../shared/model/client';
import { PaginatedResponse } from '../shared/model/paginatedResponse';

@Injectable({
  providedIn: 'root',
})
export class Client {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly apiUrl: string = environment.apiUrl + 'clients';

  getClients(
    page: number = 0,
    size: number = 10,
    sortBy: string = 'id',
    direction: string = 'ASC',
  ): Observable<PaginatedResponse<ClientResponse>> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('sortBy', sortBy)
      .set('direction', direction);
    return this.http.get<PaginatedResponse<ClientResponse>>(`${this.apiUrl}`, {
      params,
    });
  }

  getClientById(id: number): Observable<ClientResponse> {
    return this.http.get<ClientResponse>(`${this.apiUrl}/${id}`);
  }

  createClient(client: CreateClient): Observable<ClientResponse> {
    return this.http.post<ClientResponse>(`${this.apiUrl}`, client);
  }

  updateClient(id: number, client: UpdateClient): Observable<ClientResponse> {
    return this.http.put<ClientResponse>(`${this.apiUrl}/${id}`, client);
  }

  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
