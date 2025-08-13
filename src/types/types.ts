export type User = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'manager';
};

export type Users = User[];

export enum UserRole {
  User = 'user',
  Admin = 'admin',
  Manager = 'manager',
}

export type ActiveRoleFilter = UserRole | 'none';
