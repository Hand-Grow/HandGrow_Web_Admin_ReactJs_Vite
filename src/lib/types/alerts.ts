export enum AlertSeverity {
  CRITICAL = 'critical',
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

export enum AlertStatus {
  ACTIVE = 'active',
  RESOLVED = 'resolved',
  ACKNOWLEDGED = 'acknowledged',
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  severity: AlertSeverity;
  status: AlertStatus;
  category: string;
  location?: string;
  affectedPeople?: number;
  createdAt: string;
  priority: 'urgent' | 'high' | 'medium' | 'low';
  icon: string;
  backgroundColor: string;
  borderColor: string;
}

export interface AlertCategory {
  id: string;
  name: string;
  count: number;
}
