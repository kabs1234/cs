import type { ReactElement } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type React from 'react';
import type { ActiveRoleFilter } from '@/types/types';

export default function RoleFilter({
  activeRoleFilter,
  setActiveRoleFilter,
  disabled,
}: {
  activeRoleFilter: ActiveRoleFilter;
  setActiveRoleFilter: React.Dispatch<React.SetStateAction<ActiveRoleFilter>>;
  disabled?: boolean;
}): ReactElement {
  const onRoleFilterValueChange = (newRoleFiter: string): void => {
    setActiveRoleFilter(newRoleFiter as ActiveRoleFilter);
  };

  return (
    <Select
      onValueChange={onRoleFilterValueChange}
      value={activeRoleFilter}
      disabled={disabled}
    >
      <SelectTrigger className="mb-5 md:mb-0 md:mr-auto">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">All roles</SelectItem>
        <SelectItem value="user">User</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
        <SelectItem value="manager">Manager</SelectItem>
      </SelectContent>
    </Select>
  );
}
