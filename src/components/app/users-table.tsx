import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getRoleCaptionString } from '@/lib/utils';
import type { ActiveRoleFilter, Users } from '@/types/types';

import type { ReactElement } from 'react';

export default function UsersTable({
  usersData,
  activeRoleFilter,
}: {
  usersData: Users;
  activeRoleFilter: ActiveRoleFilter;
}): ReactElement {
  const filteredUsers = usersData.filter((user) => {
    if (activeRoleFilter !== 'none') {
      return user.role === activeRoleFilter;
    }

    return user;
  });

  const roleCaptionString =
    filteredUsers.length > 0
      ? getRoleCaptionString(activeRoleFilter)
      : `${
          activeRoleFilter.charAt(0).toUpperCase() + activeRoleFilter.slice(1)
        } list is empty. Try to look for different roles!`;

  return (
    <Table className="mb-4">
      <TableCaption className="caption-top mb-4">
        {roleCaptionString}
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
        {filteredUsers.map((user) => {
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
