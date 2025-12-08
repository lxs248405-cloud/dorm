import React, { useState } from 'react';
import { Search, Filter, MapPin, Clock } from 'lucide-react';
import { Item } from '../types';

// Mock Data
const MOCK_ITEMS: Item[] = [
  { id: '1', title: '落地晾衣架', category: '生活', status: 'available', image: 'img/晾衣架.jpg', location: '桔园 302', ownerName: '张三', creditRequired: 600, condition: '九成新' },
  { id: '2', title: '精密螺丝刀套装', category: '工具', status: 'available', image: 'img/螺丝刀.jpg', location: '桂园 501', ownerName: '李四', creditRequired: 650, condition: '全新' },
  { id: '3', title: '高等数学(下)', category: '书籍', status: 'borrowed', image: 'img/高等数学.jpg', location: '楠园 402', ownerName: '王五', creditRequired: 0, condition: '八成新' },
  { id: '4', title: '蓝牙自拍杆', category: '数码', status: 'available', image: 'img/自拍杆.jpg', location: '竹园 102', ownerName: '赵六', creditRequired: 600, condition: '七成新' },
  { id: '5', title: '相机三脚架', category: '数码', status: 'available', image: 'img/三脚架.jpg', location: '梅园 205', ownerName: '孙七', creditRequired: 700, condition: '良' },
  { id: '6', title: '小米充电宝', category: '数码', status: 'reserved', image: 'img/充电宝.jpg', location: '龙翔园 101', ownerName: '周八', creditRequired: 500, condition: '九成新' },
];

const Items: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredItems = MOCK_ITEMS.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-3 text-dark">楼栋资源池</h2>
            <p className="text-gray-600">发现你身边的宝藏，无需重复购买</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <input 
                type="text" 
                placeholder="搜索物品..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white shadow-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <select 
              className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="all">全部分类</option>
              <option value="工具">工具类</option>
              <option value="电器">电器类</option>
              <option value="生活">生活用品</option>
              <option value="书籍">学习资料</option>
              <option value="体育">体育用品</option>
              <option value="数码">数码产品</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${item.status !== 'available' ? 'opacity-90' : ''}`}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${item.status !== 'available' ? 'grayscale' : ''}`} 
                  onError={(e) => {
                    // Fallback if image fails (though user provided them)
                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x300?text=No+Image';
                  }}
                />
                <div className={`absolute top-2 right-2 text-white text-xs font-bold px-2 py-1 rounded ${
                  item.status === 'available' ? 'bg-primary' : 
                  item.status === 'borrowed' ? 'bg-gray-500' : 'bg-warning'
                }`}>
                  {item.status === 'available' ? '可借' : item.status === 'borrowed' ? '借出中' : '已预约'}
                </div>
                {item.status !== 'available' && (
                  <div className="absolute bottom-0 w-full bg-black/60 text-white text-xs py-1 px-2 text-center backdrop-blur-sm">
                    {item.status === 'borrowed' ? '预计 18:00 归还' : '待取货'}
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-dark truncate" title={item.title}>{item.title}</h3>
                  <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded whitespace-nowrap ml-2">{item.condition}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin size={14} className="mr-1 text-gray-400" />
                  <span>{item.location}</span>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-xs bg-gray-50 px-2 py-1 rounded text-gray-600 border border-gray-100">
                    信用 ≥ {item.creditRequired}
                  </span>
                  <button 
                    disabled={item.status !== 'available'}
                    className={`font-medium text-sm transition-colors ${
                      item.status === 'available' ? 'text-primary hover:text-green-700 hover:underline' : 'text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {item.status === 'available' ? '立即预约' : '排队中'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p>没有找到相关物品，去发布一个需求吧！</p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <button className="px-6 py-2 rounded-lg border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-all text-sm font-medium">
            加载更多
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;