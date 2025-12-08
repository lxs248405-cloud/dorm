import React from 'react';
import { BorrowRecord } from '../types';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

const RECORDS: BorrowRecord[] = [
  { id: '1', itemName: '螺丝刀套装', itemImage: 'img/螺丝刀.jpg', location: '桂园 501', borrowDate: '2023-05-10 14:30', returnDate: '2023-05-10 18:30', status: 'active' },
  { id: '2', itemName: '充电宝', itemImage: 'img/充电宝.jpg', location: '楠园 301', borrowDate: '2023-05-08 20:15', returnDate: '2023-05-09 08:15', status: 'returned' },
  { id: '3', itemName: '高等数学教材', itemImage: 'img/高等数学.jpg', location: '楠园 402', borrowDate: '2023-05-01 09:00', returnDate: '2023-05-03 18:00', status: 'overdue' },
];

const Records: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">借用记录</h2>
        
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-500 text-sm">物品</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-500 text-sm">取货地点</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-500 text-sm">借用时间</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-500 text-sm">状态</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-500 text-sm">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {RECORDS.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <img 
                          src={record.itemImage} 
                          alt={record.itemName} 
                          className="w-10 h-10 rounded-lg mr-3 object-cover border border-gray-200"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://placehold.co/100x100?text=Item';
                          }}
                        />
                        <span className="font-medium text-dark">{record.itemName}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600">{record.location}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">
                      <div>{record.borrowDate}</div>
                      <div className="text-xs text-gray-400">至 {record.returnDate}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        record.status === 'active' ? 'bg-yellow-100 text-yellow-800' :
                        record.status === 'returned' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {record.status === 'active' && <Clock size={12} className="mr-1" />}
                        {record.status === 'returned' && <CheckCircle size={12} className="mr-1" />}
                        {record.status === 'overdue' && <AlertCircle size={12} className="mr-1" />}
                        {record.status === 'active' ? '使用中' :
                         record.status === 'returned' ? '已归还' : '已逾期'}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      {record.status === 'active' || record.status === 'overdue' ? (
                        <button className="text-primary hover:text-green-700 text-sm font-medium hover:underline">
                          确认归还
                        </button>
                      ) : (
                        <span className="text-gray-400 text-sm">已完成</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;