import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { mockUsers } from '@/mocks/mocks';

import type { ReactElement } from 'react';

export default function UsersTable(): ReactElement {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockUsers.map((mockUser) => {
          return (
            <TableRow key={mockUser.id}>
              <TableCell className="font-medium">{mockUser.name}</TableCell>
              <TableCell>{mockUser.email}</TableCell>
              <TableCell>{mockUser.role}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
