import AddUserForm from '@/components/app/add-user-form';
import UsersTable from '@/components/app/users-table';
import { useState, type ReactElement } from 'react';

import { mockUsers } from '@/mocks/mocks';
import RoleFilter from '@/components/app/role-filter';
import {
  type ActiveRoleFilter,
  type SearchParameters,
  type User,
  type Users,
} from '@/types/types';
import { SeachUser } from '@/components/app/search-user';

export default function UsersPage(): ReactElement {
  const [activeRoleFilter, setActiveRoleFilter] =
    useState<ActiveRoleFilter>('none');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchParameter, setSearchParameter] =
    useState<SearchParameters>('name');

  const [usersData, setUsersData] = useState<Users>(mockUsers);

  const onAddUserSubmit = (userData: User): void => {
    setUsersData([...usersData, userData]);
  };

  return (
    <div className="mr-4 ml-4">
      <div className="flex flex-col items-center mb-5 mt-5 md:flex-row md:items-start">
        <RoleFilter
          activeRoleFilter={activeRoleFilter}
          setActiveRoleFilter={setActiveRoleFilter}
          disabled={usersData.length === 0}
        />

        <SeachUser
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchParameter={searchParameter}
          setSearchParameter={setSearchParameter}
        />

        <AddUserForm onAddUserSubmit={onAddUserSubmit} />
      </div>

      {usersData.length !== 0 || searchQuery.length !== 0 ? (
        <UsersTable
          usersData={usersData}
          activeRoleFilter={activeRoleFilter}
          searchQuery={searchQuery}
          searchParameter={searchParameter}
        />
      ) : (
        <p>Users list is empty! Try to reload the page please!</p>
      )}
    </div>
  );
}
