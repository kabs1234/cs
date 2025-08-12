export type User = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'manager';
};

export type Users = User[];
