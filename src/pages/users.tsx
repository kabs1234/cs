import AddUserForm from '@/components/app/add-user-form';
import UsersTable from '@/components/app/users-table';
import type { ReactElement } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { mockUsers } from '@/mocks/mocks';

export default function UsersPage(): ReactElement {
  return (
    <div className="mr-4 ml-4">
      <div className="flex mb-5 mt-5">
        <Select>
          <SelectTrigger className="mr-auto">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="user">User</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
          </SelectContent>
        </Select>

        <AddUserForm />
      </div>
      <UsersTable usersData={mockUsers} />
    </div>
  );
}
