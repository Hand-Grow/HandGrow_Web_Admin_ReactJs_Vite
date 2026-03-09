import { Crop, CropCategory, CropMetrics, CropStatus } from "../types/crops";

export const crops: Crop[] = [
  {
    id: 'crop-1',
    name: 'Lúa ST25',
    owner: 'Nguyễn Văn A',
    ownerId: 'user-1',
    location: 'Long An',
    area: 2.5,
    costTotal: 25000000,
    expectedYield: 15,
    status: CropStatus.ACTIVE,
    startDate: '01/02/2024',
    expectedEndDate: '01/06/2024',
    progress: 65,
    crops: ['Lúa', 'Rau'],
  },
  {
    id: 'crop-2',
    name: 'Rau an toàn',
    owner: 'HTX Tân Phú',
    ownerId: 'user-2',
    location: 'Long An',
    area: 12,
    costTotal: 120000000,
    expectedYield: 80,
    status: CropStatus.ACTIVE,
    startDate: '15/01/2024',
    expectedEndDate: '15/03/2024',
    progress: 90,
    crops: ['Lúa', 'Rau'],
  },
  {
    id: 'crop-3',
    name: 'Cà phê Robusta',
    owner: 'Công ty CP Nông Sản Đắk Lắk',
    ownerId: 'user-3',
    location: 'Đắk Lắk',
    area: 35,
    costTotal: 350000000,
    expectedYield: 150,
    status: CropStatus.PLANNING,
    startDate: '01/03/2024',
    expectedEndDate: '01/12/2024',
    progress: 15,
    crops: ['Cà phê'],
  },
];

export const cropCategories: CropCategory[] = [
  { id: 'all', name: 'Tất cả', count: 6 },
  { id: 'active', name: 'Lập kế hoạch', count: 1 },
  { id: 'planning', name: 'Đang thực hiện', count: 3 },
  { id: 'completed', name: 'Thu hoạch', count: 1 },
  { id: 'archived', name: 'Hoàn thành', count: 1 },
];

export const cropMetrics: CropMetrics = {
  totalArea: 45.7,
  totalCost: 513000000,
  totalExpectedYield: 298,
  numLocation: 5,
};
