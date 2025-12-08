import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, CalendarCheck, Shield, Check, PlayCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface HomeProps {
  onOpenAuth: () => void;
}

const Home: React.FC<HomeProps> = ({ onOpenAuth }) => {
  const { user } = useAuth();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5] relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 animate-slide-up">
              <div className="inline-block px-4 py-1.5 bg-white rounded-full border border-primary/20 text-primary text-sm font-medium mb-6 shadow-sm">
                ✨ 智享宿舍：从容应队创新实践项目
              </div>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] mb-6 text-gray-900">
                让闲置物品<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">在楼栋里流动</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed">
                不仅仅是借物，更是连接。基于信用体系的宿舍资源共享平台，解决“找人难、开口难、归还难”的三大痛点。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {user ? (
                   <Link to="/items" className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-200 transform hover:-translate-y-1 flex items-center justify-center">
                     浏览物品 <ArrowRight size={18} className="ml-2" />
                   </Link>
                ) : (
                  <button onClick={onOpenAuth} className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-200 transform hover:-translate-y-1 flex items-center justify-center">
                    开始共享之旅 <ArrowRight size={18} className="ml-2" />
                  </button>
                )}
                <button className="px-8 py-4 rounded-full bg-white text-dark border border-gray-200 font-bold hover:bg-gray-50 transition-all shadow-sm hover:shadow-md flex items-center justify-center">
                  <PlayCircle size={20} className="text-gray-400 mr-2" /> 查看演示
                </button>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src="https://picsum.photos/100/100?random=1" alt="u1" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                  <img src="https://picsum.photos/100/100?random=2" alt="u2" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                  <img src="https://picsum.photos/100/100?random=3" alt="u3" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                </div>
                <p className="text-sm text-gray-500">
                  <span className="font-bold text-dark">816+</span> 位同学已加入，累计共享 <span className="font-bold text-dark">1,240</span> 次
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative animate-fade-in">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] bg-white p-2">
                <img src="img/共享.png" alt="系统展示" className="w-full rounded-xl" />
                
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-bounce hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Check size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">刚刚</p>
                      <p className="text-sm font-bold">李同学借走了"螺丝刀"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">简单三步，建立信任链接</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">打破宿舍“闭门不出”的隔阂，让资源在信任中传递</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Plus, title: '1. 扫码登记', desc: '无需繁琐录入，支持拍照识别物品。系统自动匹配分类，建议信用押金。', color: 'blue' },
              { icon: CalendarCheck, title: '2. 预约匹配', desc: '实时查看楼栋可用资源，一键预约。系统推送取货位置（精确到寝室号）。', color: 'orange' },
              { icon: Shield, title: '3. 信用闭环', desc: '取还双向确认。按时归还增加信用分，信用分可兑换优先权或实物奖励。', color: 'green' }
            ].map((step, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-neutral hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className={`w-16 h-16 bg-${step.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-${step.color}-600`}>
                  <step.icon size={28} className={step.color === 'green' ? 'text-primary' : `text-${step.color}-600`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">加入智享宿舍，让资源更高效</h2>
          <p className="max-w-xl mx-auto mb-8 opacity-90">
            已有 12 个楼栋加入试点。每一次共享，都是一次信任的传递。
          </p>
          {!user && (
            <button onClick={onOpenAuth} className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
              立即注册 (赠1000积分)
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;