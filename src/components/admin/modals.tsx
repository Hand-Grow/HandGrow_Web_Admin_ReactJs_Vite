'use client';

import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  title: string;
  children?: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function AddUserModal({ isOpen, onClose, onSubmit }: AddUserModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'farmer',
    location: '',
    landArea: '',
  });

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({ name: '', email: '', type: 'farmer', location: '', landArea: '' });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Thêm người dùng mới">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tên</label>
          <Input
            placeholder="Nhập tên người dùng"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <Input
            placeholder="Nhập email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loại</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="farmer">Nông dân</option>
            <option value="business">Doanh nghiệp</option>
            <option value="investor">Nhà đầu tư</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Địa điểm</label>
          <Input
            placeholder="Nhập địa điểm"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Diện tích (ha)</label>
          <Input
            placeholder="Nhập diện tích"
            type="number"
            value={formData.landArea}
            onChange={(e) => setFormData({ ...formData, landArea: e.target.value })}
          />
        </div>
        <div className="flex gap-2 pt-4">
          <Button variant="outline" className="flex-1" onClick={onClose}>Hủy</Button>
          <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" onClick={handleSubmit}>Thêm</Button>
        </div>
      </div>
    </Modal>
  );
}

interface AddCropModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function AddCropModal({ isOpen, onClose, onSubmit }: AddCropModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    area: '',
    location: '',
    startDate: '',
    estimatedYield: '',
  });

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({ name: '', area: '', location: '', startDate: '', estimatedYield: '' });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Thêm mùa vụ mới">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tên mùa vụ</label>
          <Input
            placeholder="Nhập tên mùa vụ"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Diện tích (ha)</label>
          <Input
            placeholder="Nhập diện tích"
            type="number"
            value={formData.area}
            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Địa điểm</label>
          <Input
            placeholder="Nhập địa điểm"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ngày bắt đầu</label>
          <Input
            placeholder="Nhập ngày bắt đầu"
            type="date"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sản lượng dự kiến (tấn)</label>
          <Input
            placeholder="Nhập sản lượng dự kiến"
            type="number"
            value={formData.estimatedYield}
            onChange={(e) => setFormData({ ...formData, estimatedYield: e.target.value })}
          />
        </div>
        <div className="flex gap-2 pt-4">
          <Button variant="outline" className="flex-1" onClick={onClose}>Hủy</Button>
          <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" onClick={handleSubmit}>Thêm</Button>
        </div>
      </div>
    </Modal>
  );
}

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: Record<string, any>;
}

export function DetailModal({ isOpen, onClose, title, data }: DetailModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex justify-between items-start border-b border-gray-200 pb-3">
            <span className="text-sm font-medium text-gray-700 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </span>
            <span className="text-sm text-gray-900">{String(value)}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2 pt-4 mt-4 border-t border-gray-200">
        <Button variant="outline" className="flex-1" onClick={onClose}>Đóng</Button>
      </div>
    </Modal>
  );
}
