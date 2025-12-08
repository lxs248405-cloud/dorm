import React, { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';

const Share: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send data to backend here
  };

  if (submitted) {
    return (
      <div className="pt-24 pb-12 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full animate-slide-up">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-primary" size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-2">提交成功！</h2>
          <p className="text-gray-600 mb-6">感谢你的分享。你的物品经审核后将上架到楼栋资源池。</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            继续分享
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Info Side */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold mb-4">分享你的闲置物品</h2>
            <p className="text-gray-600 mb-6">
              将你暂时不用的物品共享给楼栋同学，既能帮助他人，又能获得信用积分，何乐而不为？
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
               <h3 className="font-bold mb-4 text-lg">奖励规则</h3>
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <span className="text-primary text-xs font-bold">1</span>
                   </div>
                   <p className="text-sm text-gray-600">每共享一件物品可获得 <span className="text-primary font-bold">10积分</span> 奖励</p>
                 </li>
                 <li className="flex items-start">
                   <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <span className="text-primary text-xs font-bold">2</span>
                   </div>
                   <p className="text-sm text-gray-600">物品被借用一次可额外获得 <span className="text-primary font-bold">5积分</span></p>
                 </li>
                 <li className="flex items-start">
                   <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <span className="text-primary text-xs font-bold">3</span>
                   </div>
                   <p className="text-sm text-gray-600">积分可兑换公共物品使用优先权或小礼品</p>
                 </li>
               </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
              <div className="flex items-center mb-3">
                <img src="https://picsum.photos/100/100?random=5" alt="User" className="w-10 h-10 rounded-full mr-3 border border-white shadow-sm" />
                <div>
                  <h4 className="font-medium text-sm">李明 · 桂园</h4>
                  <p className="text-xs text-gray-500">已共享12件物品 | 信用分850</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic relative pl-4 border-l-2 border-orange-200">
                "在这个平台共享了好几个物品，帮助了不少的同学，获得了不少积分，上个月用积分兑换了洗衣券，很实用！"
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 w-full bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100">物品共享登记</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">物品名称</label>
                  <input required type="text" placeholder="例如：吹风机、螺丝刀..." className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">物品分类</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white">
                    <option>请选择分类</option>
                    <option>工具类</option>
                    <option>电器类</option>
                    <option>生活用品</option>
                    <option>学习资料</option>
                    <option>其他</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">物品新旧程度</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white">
                    <option>全新</option>
                    <option>九成新</option>
                    <option>八成新</option>
                    <option>七成新</option>
                    <option>六成新及以下</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">所在寝室</label>
                  <div className="flex gap-2">
                    <select className="w-1/3 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white">
                      <option>桔园</option>
                      <option>桃园</option>
                      <option>梅园</option>
                      <option>竹园</option>
                      <option>桂园</option>
                      <option>楠园</option>
                    </select>
                    <input required type="text" placeholder="寝室号 (如302)" className="w-2/3 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">可借时间段</label>
                <input type="text" placeholder="例如：全天、18:00-22:00..." className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">物品描述（可选）</label>
                <textarea rows={4} placeholder="简单描述物品状态、使用注意事项等..." className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">上传物品图片</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-primary hover:bg-green-50/30 transition-colors cursor-pointer group">
                  <Upload className="mx-auto text-gray-400 group-hover:text-primary mb-2" size={32} />
                  <p className="text-gray-500 text-sm group-hover:text-primary">点击或拖拽文件到此处上传</p>
                  <p className="text-xs text-gray-400 mt-1">支持JPG、PNG格式，不超过5MB</p>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-green-600 transition-all shadow-lg active:scale-[0.98]">
                  确认共享
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
