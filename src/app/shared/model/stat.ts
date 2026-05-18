export interface StatsOverview {
  fillRate: number;
  totalAppointments: number;
  cancelledAppointments: number;
  noShowAppointments: number;
  totalClients: number;
  newClients: number;
}

export interface OccupancyStat {
  totalAvailableMinutes: number;
  bookedMinutes: number;
  freeMinutes: number;
  fillRate: number;
}

export interface CancellationStats {
  totalCancellations: number;
  cancellationRate: number;
  noShowRate: number;
}

export interface ClientStats {
  totalClients: number;
  newClients: number;
  returningClients: number;
}
