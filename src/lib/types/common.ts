export enum StatusType {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

export enum UserRole {
  ADMIN = 'admin',
  FARMER = 'farmer',
  BUYER = 'buyer',
}

export interface StatusBadge {
  label: string;
  type: StatusType;
  color: 'green' | 'yellow' | 'red' | 'blue';
}

export interface TimeRange {
  label: string;
  value: string;
}

export interface PercentageChange {
  value: number;
  trend: 'up' | 'down' | 'neutral';
  label?: string;
}
