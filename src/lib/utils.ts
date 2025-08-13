import { UserRole, type ActiveRoleFilter } from '@/types/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getRoleCaptionString = (
  activeRoleFilter: ActiveRoleFilter
): string => {
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
