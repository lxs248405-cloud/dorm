import React from 'react';
import { Shield, Gift, AlertTriangle, ArrowUp, ArrowDown, Gavel, FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Credit: React.FC = () => {
  const { user } = useAuth();
  const score = user ? user.credit : 1000;

  return (
    <div className="pt-24 pb-12 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left: Score Card */}
          <div className="lg:w-1/3">
            <div className="sticky top-28">
              <h2 className="text-3xl font-bold mb-6">信用体系</h2>
              <p className="text-gray-600 mb-8">信用是智享宿舍的通行证。我们构建了基于学号的实名信用模型。</p>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 text-center py-6">
                  <p className="text-gray-400 text-sm mb-2 uppercase tracking-widest">我的当前信用分</p>
                  <div className="text-7xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">{score}</div>
                  <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs text-primary font-bold mb-8 border border-white/5">
                    信用极好
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-left border-t border-gray-700 pt-6">
                    <div>
                      <p className="text-gray-400 text-xs mb-1">可用额度</p>
                      <p className="font-bold text-lg">无限制</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">免押金权益</p>
                      <p className="font-bold text-lg text-green-400 flex items-center">
                        <Shield size={14} className="mr-1" /> 已激活
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-neutral rounded-2xl p-6 border border-gray-100">
                 <h4 className="font-bold mb-4 flex items-center text-dark"><Gift className="text-secondary mr-2" size={20} /> 积分兑换</h4>
                 <ul className="space-y-4 text-sm">
                   <li className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0 last:pb-0">
                     <span className="text-gray-600">优先借用权</span>
                     <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-medium hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">50分 兑换</button>
                   </li>
                   <li className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0 last:pb-0">
                    <span className="text-gray-600">食堂5元券</span>
                    <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-medium hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">100分 兑换</button>
                  </li>
                  <li className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0 last:pb-0">
                    <span className="text-gray-600">图书馆储物柜 (一周)</span>
                    <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-medium hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">200分 兑换</button>
                  </li>
                 </ul>
              </div>
            </div>
          </div>

          {/* Right: Rules and Details */}
          <div className="lg:w-2/3 space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center"><FileText size={24} className="mr-2 text-gray-400" /> 信用记录</h3>
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                 <div className="p-4 border-b border-gray-50 flex items-center hover:bg-gray-50 transition-colors">
                   <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 text-green-600">
                     <ArrowUp size={20} />
                   </div>
                   <div className="flex-1">
                     <h4 className="font-bold text-sm">按时归还充电宝</h4>
                     <p className="text-xs text-gray-400">2023-05-09</p>
                   </div>
                   <span className="font-bold text-green-600">+5</span>
                 </div>
                 <div className="p-4 border-b border-gray-50 flex items-center hover:bg-gray-50 transition-colors">
                   <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4 text-red-600">
                     <ArrowDown size={20} />
                   </div>
                   <div className="flex-1">
                     <h4 className="font-bold text-sm">高等数学教材逾期归还</h4>
                     <p className="text-xs text-gray-400">2023-05-04</p>
                   </div>
                   <span className="font-bold text-red-600">-10</span>
                 </div>
                 <div className="p-4 flex items-center hover:bg-gray-50 transition-colors">
                   <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 text-green-600">
                     <ArrowUp size={20} />
                   </div>
                   <div className="flex-1">
                     <h4 className="font-bold text-sm">新共享物品：篮球</h4>
                     <p className="text-xs text-gray-400">2023-05-01</p>
                   </div>
                   <span className="font-bold text-green-600">+10</span>
                 </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">信用增减规则</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50/50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center"><ArrowUp size={18} className="mr-2" /> 加分项</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-green-900 bg-white/60 p-2 rounded-lg">
                      <span className="w-14 font-bold">+1000</span>
                      <span>注册并通过实名认证</span>
                    </li>
                    <li className="flex items-center text-sm text-green-900 bg-white/60 p-2 rounded-lg">
                      <span className="w-14 font-bold">+10</span>
                      <span>每共享一件有效物品</span>
                    </li>
                    <li className="flex items-center text-sm text-green-900 bg-white/60 p-2 rounded-lg">
                      <span className="w-14 font-bold">+5</span>
                      <span>按时归还物品并获好评</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-50/50 rounded-xl p-6 border border-red-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center"><ArrowDown size={18} className="mr-2" /> 减分项</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-red-900 bg-white/60 p-2 rounded-lg">
                      <span className="w-14 font-bold">-10</span>
                      <span>逾期归还 (每天)</span>
                    </li>
                    <li className="flex items-center text-sm text-red-900 bg-white/60 p-2 rounded-lg">
                      <span className="w-14 font-bold">-50</span>
                      <span>物品损坏未主动赔偿</span>
                    </li>
                    <li className="flex items-center text-sm text-red-900 bg-white/60 p-2 rounded-lg">
                      <span className="w-14 font-bold">封号</span>
                      <span>恶意虚假发布或恶意不还</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">保障与纠纷解决</h3>
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                        <Gavel size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">纠纷仲裁机制</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          当借还双方对物品状态产生分歧时，可发起“仲裁申请”。由楼栋管理员（辅导员/宿管/学生代表）组成的三方小组介入定责。
                        </p>
                        <button className="mt-3 text-primary text-sm font-medium hover:underline">查看详细流程 &rarr;</button>
                      </div>
                   </div>
                </div>
                <div className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                       <AlertTriangle size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-lg mb-2">物品价值评估与赔偿</h4>
                       <p className="text-gray-600 text-sm leading-relaxed">
                         贵重物品（建议&gt;50元）在发布时建议填写原价。损坏时，依据折旧公式计算赔偿金额。平台将冻结违规方借用权限直至赔偿完成。
                       </p>
                     </div>
                  </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;
