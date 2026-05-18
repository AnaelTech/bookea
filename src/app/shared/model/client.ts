export interface Client {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  notes: string;
  createdAt: Date;
  updateAt: Date;
}

export interface CreateClient {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

export interface UpdateClient {
  firstname: string;
  lastname: string;
  phone: string;
}

export interface ClientResponse {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  notes: string;
}
