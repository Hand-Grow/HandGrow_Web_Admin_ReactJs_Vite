import { Alert, AlertSeverity, AlertStatus, AlertCategory } from '@/lib/types/alerts';

export const alerts: Alert[] = [
  {
    id: 'alert-1',
    title: 'Cảnh báo mưa lớn và giông lốc',
    description: 'Khu vực Đông bằng sông Cửu Long sẽ có mưa vừa đến mưa to trong 24-48 giờ tới. Khuyên cáo nông dân gia có nhà kính và thoát nước ruộng.',
    severity: AlertSeverity.HIGH,
    status: AlertStatus.ACTIVE,
    category: 'Thời tiết',
    location: 'Đông bằng sông Cửu Long',
    affectedPeople: 2450,
    createdAt: '10 phút trước',
    priority: 'urgent',
    icon: 'cloud-rain',
    backgroundColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 'alert-2',
    title: 'Phát hiện sâu dục thần trên lúa',
    description: 'HTX Long An báo cáo phát hiện sâu dục thần phát hoạn ruộng lúa. Cần phun thuốc BVTV ngay.',
    severity: AlertSeverity.MEDIUM,
    status: AlertStatus.ACTIVE,
    category: 'Sâu bệnh',
    location: 'HTX Long An',
    affectedPeople: 120,
    createdAt: '25 phút trước',
    priority: 'high',
    icon: 'bug',
    backgroundColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
];

export const alertCategories: AlertCategory[] = [
  { id: 'all', name: 'Tất cả', count: 6 },
  { id: 'weather', name: 'Thời tiết', count: 2 },
  { id: 'pests', name: 'Sâu bệnh', count: 2 },
  { id: 'warnings', name: 'Khán cấp', count: 1 },
  { id: 'system', name: 'Hệ thống', count: 1 },
];
