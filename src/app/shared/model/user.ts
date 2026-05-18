export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  lastlogin: Date;
  createdAt: Date;
  updateAt: Date;
}

export interface CreateUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
}

export interface UpdateUser {
  firstname: string;
  lastname: string;
  phone: string;
}

export interface UserResponse {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}
