'use client';

 import { cn } from "@/lib/utils";
import { Button } from "../ui/button";


interface EnhancedModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function EnhancedModal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}: EnhancedModalProps) {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-2xl',
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        className={cn(
          'bg-white rounded-lg w-full shadow-xl',
          sizeClasses[size]
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            ×
          </button>
        </div>
        <div className="p-6 max-h-96 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

interface UserDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
}

export function UserDetailModal({ isOpen, onClose, user }: UserDetailModalProps) {
  if (!user) return null;

  return (
    <EnhancedModal isOpen={isOpen} onClose={onClose} title={user.name} size="lg">
      <div className="space-y-4">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div
            className={cn(
              'w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold text-white',
              user.backgroundColor
            )}
          >
            {user.icon}
          </div>
        </div>

        {/* User Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase">ID</p>
            <p className="text-sm font-medium text-gray-900 mt-1">#{user.id.replace('user-', '')}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase">Loại</p>
            <span className="inline-block text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded mt-1">
              {user.type}
            </span>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase">Địa điểm</p>
            <p className="text-sm font-medium text-gray-900 mt-1">{user.location}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase">Diện tích</p>
            <p className="text-sm font-medium text-gray-900 mt-1">
              {user.landArea ? `${user.landArea} ha` : '-'}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase">Ngày tham gia</p>
            <p className="text-sm font-medium text-gray-900 mt-1">{user.joinDate}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase">Trạng thái</p>
            <span
              className={cn(
                'inline-block text-xs font-medium px-2 py-1 rounded mt-1',
                user.status === 'active'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              )}
            >
              {user.status === 'active' ? 'Hoạt động' : 'Không hoạt động'}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4 border-t border-gray-200 mt-6">
          <Button variant="outline" className="flex-1">
            Chỉnh sửa
          </Button>
          <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
            Liên hệ
          </Button>
          <Button variant="outline" className="flex-1 text-red-600">
            Vô hiệu hóa
          </Button>
        </div>
      </div>
    </EnhancedModal>
  );
}

interface CropDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  crop: any;
}

export function CropDetailModal({ isOpen, onClose, crop }: CropDetailModalProps) {
  if (!crop) return null;

  return (
    <EnhancedModal isOpen={isOpen} onClose={onClose} title={crop.name} size="lg">
      <div className="space-y-4">
        {/* Main Info */}
        <div className="bg-emerald-50 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase">Diện tích</p>
              <p className="text-lg font-bold text-emerald-600 mt-1">{crop.area} ha</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase">Sản lượng dự kiến</p>
              <p className="text-lg font-bold text-emerald-600 mt-1">{crop.expectedYield} tấn</p>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase">Tên chủ trương</p>
            <p className="text-sm font-medium text-gray-900 mt-1">{crop.owner}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase">Địa điểm</p>
            <p className="text-sm font-medium text-gray-900 mt-1">{crop.location}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase">Ngày bắt đầu</p>
            <p className="text-sm font-medium text-gray-900 mt-1">{crop.startDate}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase">Dự kiến kết thúc</p>
            <p className="text-sm font-medium text-gray-900 mt-1">{crop.endDate}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase">Chi phí</p>
            <p className="text-sm font-medium text-gray-900 mt-1">₫{crop.cost}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase">Tiến độ</p>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-emerald-600 h-2 rounded-full"
                  style={{ width: `${crop.progress}%` }}
                />
              </div>
              <p className="text-xs text-gray-600 mt-1">{crop.progress}%</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Mô tả</p>
          <p className="text-sm text-gray-700">{crop.description || 'Không có mô tả'}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4 border-t border-gray-200 mt-6">
          <Button variant="outline" className="flex-1">
            Chỉnh sửa
          </Button>
          <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
            Theo dõi
          </Button>
        </div>
      </div>
    </EnhancedModal>
  );
}
