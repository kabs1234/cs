import AddUserForm from '@/components/app/add-user-form';
import UsersTable from '@/components/app/users-table';
import { useState, type ReactElement } from 'react';

import { mockUsers } from '@/mocks/mocks';
import RoleFilter from '@/components/app/role-filter';
import { type ActiveRoleFilter, type User, type Users } from '@/types/types';

export default function UsersPage(): ReactElement {
  const [activeRoleFilter, setActiveRoleFilter] =
    useState<ActiveRoleFilter>('none');

  const [usersData, setUsersData] = useState<Users>(mockUsers);

  const onAddUserSubmit = (userData: User): void => {
    setUsersData([...usersData, userData]);
  };

  return (
    <div className="mr-4 ml-4">
      <div className="flex mb-5 mt-5">
        <RoleFilter
          activeRoleFilter={activeRoleFilter}
          setActiveRoleFilter={setActiveRoleFilter}
          disabled={usersData.length === 0}
        />

        <AddUserForm onAddUserSubmit={onAddUserSubmit} />
      </div>

      {usersData.length !== 0 ? (
        <UsersTable usersData={usersData} activeRoleFilter={activeRoleFilter} />
      ) : (
        <p>Users list is empty! Try to reload the page please!</p>
      )}
    </div>
  );
}
