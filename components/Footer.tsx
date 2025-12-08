import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-auto">
      <div className="container mx-auto px-4 text-center text-sm">
        <p className="font-medium text-gray-200">智享宿舍</p>
        <p className="mt-2 text-xs opacity-60">© 2024 Smart Dorm Project. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
            <span className="hover:text-primary cursor-pointer transition-colors">隐私政策</span>
            <span className="hover:text-primary cursor-pointer transition-colors">使用条款</span>
            <span className="hover:text-primary cursor-pointer transition-colors">联系管理员</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
