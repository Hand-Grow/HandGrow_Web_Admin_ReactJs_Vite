export enum OrderStatus {
  ALL = 'all',
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export interface Product {
  id: string;
  name: string;
  description?: string;
}

export interface MarketplaceOrder {
  id: string;
  orderDate: string;
  buyer: string;
  seller: string;
  product: Product;
  quantity: number;
  unit: string;
  price: number; // in VND
  totalPrice: number; // in VND
  status: OrderStatus;
  deliveryDate: string;
  statusColor: 'yellow' | 'blue' | 'green' | 'gray' | 'red';
}

export interface MarketplaceMetrics {
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
  totalRevenue: number;
}
