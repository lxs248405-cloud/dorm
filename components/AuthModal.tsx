import React, { useState } from 'react';
import { X, User, Lock, IdCard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [studentId, setStudentId] = useState('2021001');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network delay
    setTimeout(() => {
      login(studentId);
      setIsLoading(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-slide-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-10">
          <div className="flex border-b mb-8">
            <button 
              onClick={() => setIsLogin(true)}
              className={`w-1/2 pb-3 font-medium text-center transition-colors border-b-2 ${
                isLogin ? 'text-primary border-primary' : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              登录
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`w-1/2 pb-3 font-medium text-center transition-colors border-b-2 ${
                !isLogin ? 'text-primary border-primary' : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              注册
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">学号</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="请输入你的学号"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary pl-10 transition-shadow"
                />
                <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">密码</label>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="请输入密码"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary pl-10 transition-shadow"
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            
            {!isLogin && (
              <div className="flex items-start text-xs text-gray-500">
                <input type="checkbox" className="mt-0.5 mr-2 text-primary focus:ring-primary rounded" />
                <span>我已阅读并同意《智享宿舍信用协议》与隐私政策</span>
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-3 rounded-lg bg-primary text-white font-medium hover:bg-green-600 transition-all active:scale-95 shadow-lg flex justify-center items-center"
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                isLogin ? '立即登录' : '注册并领取1000初始积分'
              )}
            </button>
            
            {isLogin && (
              <p className="text-xs text-center text-gray-400 bg-gray-50 p-2 rounded">
                测试账号: 2021001 / 密码: 任意
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
