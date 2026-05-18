import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import {
  AppointmentResponse,
  CreateAppointment,
  UpdateAppointment,
} from '../shared/model/appointment';
import { PaginatedResponse } from '../shared/model/paginatedResponse';

@Injectable({
  providedIn: 'root',
})
export class Appointment {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly apiUrl: string = environment.apiUrl + 'appointments';

  getAppointments(
    page: number = 0,
    size: number = 10,
    sortBy: string = 'id',
    direction: string = 'ASC',
  ): Observable<PaginatedResponse<AppointmentResponse>> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('sortBy', sortBy)
      .set('direction', direction);
    return this.http.get<PaginatedResponse<AppointmentResponse>>(
      `${this.apiUrl}`,
      { params },
    );
  }

  getAppointmentById(id: number): Observable<AppointmentResponse> {
    return this.http.get<AppointmentResponse>(`${this.apiUrl}/${id}`);
  }

  createAppointment(
    appointment: CreateAppointment,
  ): Observable<AppointmentResponse> {
    return this.http.post<AppointmentResponse>(`${this.apiUrl}`, appointment);
  }

  updateAppointment(
    id: number,
    appointment: UpdateAppointment,
  ): Observable<AppointmentResponse> {
    return this.http.put<AppointmentResponse>(
      `${this.apiUrl}/${id}`,
      appointment,
    );
  }

  deleteAppointment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
