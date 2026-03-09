import { MarketplaceOrder, OrderStatus, MarketplaceMetrics } from '@/lib/types/marketplace';

export const marketplaceOrders: MarketplaceOrder[] = [
  {
    id: 'ORD001',
    orderDate: '18/01/2024',
    buyer: 'HTX Tân Phú',
    seller: 'Nguyễn Văn A',
    product: { id: 'p1', name: 'Lúa ST25' },
    quantity: 2,
    unit: 'tấn',
    price: 12000000,
    totalPrice: 24000000,
    status: OrderStatus.COMPLETED,
    deliveryDate: '25/01/2024',
    statusColor: 'green',
  },
  {
    id: 'ORD002',
    orderDate: '19/01/2024',
    buyer: 'Công ty CP Thực phẩm Sạch',
    seller: 'HTX Đông Thập',
    product: { id: 'p2', name: 'Rau an toàn (hỗn hợp)' },
    quantity: 500,
    unit: 'kg',
    price: 15000,
    totalPrice: 7500000,
    status: OrderStatus.PENDING,
    deliveryDate: '22/01/2024',
    statusColor: 'yellow',
  },
  {
    id: 'ORD003',
    orderDate: '17/01/2024',
    buyer: 'Nhà phân phối Agri Pro',
    seller: 'HTX An Giang',
    product: { id: 'p3', name: 'Phân bón NPK' },
    quantity: 1000,
    unit: 'kg',
    price: 18000,
    totalPrice: 18000000,
    status: OrderStatus.COMPLETED,
    deliveryDate: '20/01/2024',
    statusColor: 'green',
  },
];

export const marketplaceMetrics: MarketplaceMetrics = {
  totalOrders: 5,
  pendingOrders: 1,
  completedOrders: 1,
  totalRevenue: 18000000,
};
