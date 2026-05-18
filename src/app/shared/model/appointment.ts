import { User } from '../../services/user';
import { Client } from './client';

export interface Appointment {
  id: number;
  user: User;
  client: Client;
  startAt: Date;
  endAt: Date;
  status: AppointmentStatus;
  notes: string;
  createdAt: Date;
  updateAt: Date;
}

export enum AppointmentStatus {
  SCHEDULED,
  CANCELLED,
  COMPLETED,
  NO_SHOW,
}

export interface AppointmentResponse {
  id: number;
  user: User;
  client: Client;
  startAt: Date;
  endAt: Date;
  status: AppointmentStatus;
  notes: string;
}

export interface UpdateAppointment {
  startAt: Date;
  endAt: Date;
  status: AppointmentStatus;
  notes: string;
}

export interface CreateAppointment {
  id: number;
  user: number;
  client: number;
  startAt: Date;
  endAt: Date;
  status: AppointmentStatus;
  notes: string;
}
