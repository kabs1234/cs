import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Users } from '@/types/types';

import type { ReactElement } from 'react';

export default function UsersTable({
  usersData,
}: {
  usersData: Users;
}): ReactElement {
  return (
    <Table className="mb-4">
      <TableCaption className="caption-top mb-4">
        A list of all users.
      </TableCaption>
      <TableHeader className="hidden md:table-header-group">
        <TableRow>
          <TableHead className="border-1 border-solid border-black md:border-none">
            Name
          </TableHead>
          <TableHead className="border-1 border-solid border-black md:border-none">
            Email
          </TableHead>
          <TableHead className="border-1 border-solid border-black md:border-none">
            Role
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="grid md:table-row-group">
        {usersData.map((user) => {
          return (
            <TableRow
              key={user.id}
              className="border-1 border-solid border-black rounded mb-2 last:mb-0 last:border-1 last:border-solid last:border-black"
            >
              <TableCell className="block md:table-cell">{user.name}</TableCell>
              <TableCell className="block md:table-cell">
                {user.email}
              </TableCell>
              <TableCell className="block md:table-cell">{user.role}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
