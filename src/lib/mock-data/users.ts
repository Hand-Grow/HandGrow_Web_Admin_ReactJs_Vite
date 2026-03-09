import { User, UserFilter, UserStatistics } from '@/lib/types/users';
import { UserRole } from '@/lib/types/common';

export const users: User[] = [
  {
    id: 'user-1',
    name: 'Nguyễn Văn A',
    role: UserRole.FARMER,
    type: 'Nông dân',
    location: 'Long An',
    status: 'active',
    joinDate: '12/01/2024',
    landArea: 2.5,
    crops: ['Lúa', 'Rau'],
    icon: 'N',
    backgroundColor: 'bg-green-100',
  },
  {
    id: 'user-2',
    name: 'HTX Tân Phú',
    role: UserRole.FARMER,
    type: 'HTX',
    location: 'Long An',
    status: 'active',
    joinDate: '08/01/2024',
    landArea: 12,
    crops: ['Lúa', 'Rau'],
    icon: 'H',
    backgroundColor: 'bg-blue-100',
  },
  {
    id: 'user-3',
    name: 'Công ty TNHH XNK Nông Sản',
    role: UserRole.BUYER,
    type: 'Doanh nghiệp',
    location: 'TP.HCM',
    status: 'active',
    joinDate: '05/01/2024',
    icon: 'C',
    backgroundColor: 'bg-cyan-100',
  },
];

export const userFilters: UserFilter[] = [
  { id: 'all', label: 'Tất cả', count: 8, value: 'all' },
  { id: 'farmers', label: 'Nông dân', count: 3, value: 'farmer' },
  { id: 'htx', label: 'HTX', count: 3, value: 'htx' },
  { id: 'business', label: 'Doanh nghiệp', count: 1, value: 'business' },
  { id: 'inactive', label: 'Nhà cung cấp', count: 1, value: 'supplier' },
];

export const userStatistics: UserStatistics = {
  total: 12458,
  active: 11200,
  inactive: 1258,
  byRole: {
    [UserRole.ADMIN]: 5,
    [UserRole.FARMER]: 8000,
    [UserRole.BUYER]: 4453,
  },
};
