import { UserRole } from './common';

export interface User {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  role: UserRole;
  type: string;
  location?: string;
  status: 'active' | 'inactive' | 'banned';
  joinDate: string;
  landArea?: number;
  crops?: string[];
  icon?: string;
  backgroundColor?: string;
}

export interface UserFilter {
  id: string;
  label: string;
  count: number;
  value: string;
}

export interface UserStatistics {
  total: number;
  active: number;
  inactive: number;
  byRole: Record<UserRole, number>;
}
