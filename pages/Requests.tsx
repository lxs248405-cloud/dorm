import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MessageSquare, ThumbsUp, Plus } from 'lucide-react';
import { RequestPost } from '../types';

// Mock Data for Charts
const DATA_DISTRIBUTION = [
  { name: '工具', value: 35 },
  { name: '电器', value: 25 },
  { name: '书籍', value: 20 },
  { name: '其他', value: 20 },
];
const COLORS = ['#32c260', '#F97316', '#3B82F6', '#9CA3AF'];

// Mock Posts
const POSTS: RequestPost[] = [
  { id: '1', title: '求借 笔记本支架', description: '晚上赶论文，脖子太酸了，求借一个支架用一晚，明早归还。在桂园。', author: '张小强', credit: 820, replyCount: 3, time: '2小时前', avatar: 'https://picsum.photos/50/50?random=10' },
  { id: '2', title: '求借 演出服 (汉服)', description: '周五晚会有一个节目，急需一套男士汉服，身高175左右。愿意支付干洗费！', author: '王力', credit: 910, replyCount: 5, time: '昨天', avatar: 'https://picsum.photos/50/50?random=11' },
  { id: '3', title: '求借 万用表', description: '做实验需要测一下电路，大概用20分钟。', author: '刘伟', credit: 750, replyCount: 1, time: '2天前', avatar: 'https://picsum.photos/50/50?random=12' },
];

const Requests: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-dark">需求互助广场</h2>
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors flex items-center shadow-sm">
                <Plus size={16} className="mr-1" /> 发布需求
              </button>
            </div>

            <div className="space-y-4">
              {POSTS.map(post => (
                <div key={post.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 border border-gray-100">
                  <div className="flex items-start">
                    <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full mr-4 border border-gray-100" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-bold text-gray-800 text-lg">{post.author}</h4>
                        <span className="text-xs text-gray-400">{post.time}</span>
                      </div>
                      <p className="text-xs text-primary mb-2 font-medium">信用分 {post.credit}</p>
                      <h5 className="font-bold text-dark mb-1">{post.title}</h5>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.description}</p>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                        <div className="flex space-x-4">
                          <button className="flex items-center text-gray-400 hover:text-primary text-sm transition-colors">
                            <MessageSquare size={16} className="mr-1" /> {post.replyCount} 回复
                          </button>
                          <button className="flex items-center text-gray-400 hover:text-primary text-sm transition-colors">
                            <ThumbsUp size={16} className="mr-1" /> 帮忙
                          </button>
                        </div>
                        <button className="px-3 py-1 rounded border border-primary text-primary text-xs hover:bg-primary hover:text-white transition-colors">
                          我有，借给他
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="text-primary text-sm font-medium hover:underline">查看更多需求 &rarr;</button>
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-4 border-l-4 border-primary pl-3">资源分布</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={DATA_DISTRIBUTION}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {DATA_DISTRIBUTION.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h3 className="text-lg font-bold mb-4 border-l-4 border-secondary pl-3">平台数据</h3>
               <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-dark">256</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">在库物品</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">按时归还</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-secondary">816</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">活跃用户</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-500">12</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">覆盖楼栋</div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Requests;
