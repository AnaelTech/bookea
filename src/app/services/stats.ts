import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import {
  CancellationStats,
  ClientStats,
  OccupancyStat,
  StatsOverview,
} from '../shared/model/stat';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly apiUrl: string = environment.apiUrl + 'stats';

  private buildParams(start: Date, end: Date): HttpParams {
    return new HttpParams()
      .set('start', start.toISOString().slice(0, 19))
      .set('end', end.toISOString().slice(0, 19));
  }

  getStatsOverview(
    id: number,
    start: Date,
    end: Date,
  ): Observable<StatsOverview> {
    return this.http.get<StatsOverview>(`${this.apiUrl}/overview/${id}`, {
      params: this.buildParams(start, end),
    });
  }

  getOccupancyStats(
    id: number,
    start: Date,
    end: Date,
  ): Observable<OccupancyStat> {
    return this.http.get<OccupancyStat>(`${this.apiUrl}/occupancy/${id}`, {
      params: this.buildParams(start, end),
    });
  }

  getCancellationStats(
    id: number,
    start: Date,
    end: Date,
  ): Observable<CancellationStats> {
    return this.http.get<CancellationStats>(
      `${this.apiUrl}/cancellation/${id}`,
      { params: this.buildParams(start, end) },
    );
  }

  getClientStats(id: number, start: Date, end: Date): Observable<ClientStats> {
    return this.http.get<ClientStats>(`${this.apiUrl}/client/${id}`, {
      params: this.buildParams(start, end),
    });
  }
}
