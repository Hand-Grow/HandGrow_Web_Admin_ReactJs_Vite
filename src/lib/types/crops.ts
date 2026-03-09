export enum CropStatus {
  ACTIVE = 'active',
  ARCHIVED = 'archived',
  PLANNING = 'planning',
}

export interface Crop {
  id: string;
  name: string;
  owner: string;
  ownerId: string;
  location: string;
  area: number; // in hectares
  costTotal: number; // in VND
  expectedYield: number; // in tons
  status: CropStatus;
  startDate: string;
  expectedEndDate: string;
  progress: number; // 0-100
  crops: string[];
}

export interface CropCategory {
  id: string;
  name: string;
  count: number;
}

export interface CropMetrics {
  totalArea: number;
  totalCost: number;
  totalExpectedYield: number;
  numLocation: number;
}
