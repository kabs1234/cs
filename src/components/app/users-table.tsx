import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  UserRole,
  type ActiveRoleFilter,
  type SearchParameters,
  type Users,
} from '@/types/types';

import type { ReactElement } from 'react';

const getRoleFilterString = (activeRoleFilter: ActiveRoleFilter): string => {
  switch (activeRoleFilter) {
    case UserRole.User:
      return 'Users list';
    case UserRole.Admin:
      return 'Admins list';
    case UserRole.Manager:
      return 'Managers list';
    case 'none':
      return 'A list of all users.';
    default:
      return 'Unknown list.';
  }
};

const getRoleFilterCaption = (
  filteredUsersLength: number,
  activeRoleFilter: ActiveRoleFilter
): string => {
  if (filteredUsersLength === 0) {
    return `${
      activeRoleFilter.charAt(0).toUpperCase() + activeRoleFilter.slice(1)
    } list is empty. Try to look for different roles!`;
  }

  return getRoleFilterString(activeRoleFilter);
};

const getSearchFilterCaption = (
  filteredUsersLength: number,
  searchQuery: string,
  searchParameter: SearchParameters
): string => {
  if (filteredUsersLength === 0) {
    return `Haven't found any results on '${searchQuery}' ${searchParameter}. Please try again!`;
  }

  return `Search results on '${searchQuery}' ${searchParameter} is:`;
};

const getFilterResultsCaption = (
  filteredUsersLength: number,
  searchQuery: string,
  activeRoleFilter: ActiveRoleFilter,
  searchParameter: SearchParameters
): string => {
  if (searchQuery.length === 0) {
    return getRoleFilterCaption(filteredUsersLength, activeRoleFilter);
  }

  return getSearchFilterCaption(
    filteredUsersLength,
    searchQuery,
    searchParameter
  );
};

export default function UsersTable({
  usersData,
  activeRoleFilter,
  searchQuery,
  searchParameter,
}: {
  usersData: Users;
  activeRoleFilter: ActiveRoleFilter;
  searchQuery: string;
  searchParameter: SearchParameters;
}): ReactElement {
  const filteredUsers = usersData
    .filter((user) => {
      if (activeRoleFilter !== 'none') {
        return user.role === activeRoleFilter;
      }

      return user;
    })
    .filter((user) => {
      if (searchQuery.length === 0) {
        return user;
      }

      if (
        user[searchParameter]
          .toLowerCase()
          .startsWith(searchQuery.toLowerCase())
      ) {
        return user;
      }
    });

  return (
    <Table className="mb-4">
      <TableCaption className="caption-top mb-4">
        {getFilterResultsCaption(
          filteredUsers.length,
          searchQuery,
          activeRoleFilter,
          searchParameter
        )}
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
