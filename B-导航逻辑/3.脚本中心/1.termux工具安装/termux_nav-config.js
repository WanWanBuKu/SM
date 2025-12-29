window.navConfig = {
  /* --------------------- 工具列表 --------------------- */
  tools: [
    { name: '开机_关键词', file: 'termuxA组/1.开机_关键词.html', icon: '🚀', description: '启动项和关键词管理' },
    { name: '开机_力扣题目', file: 'termuxA组/2.开机_力扣题目.html', icon: '💻', description: '力扣题目和开机启动管理' },
    { name: '开机_服务器', file: 'termuxA组/3.开机_服务器.html', icon: '🖥️', description: '服务器开机管理' },
    { name: '乌班图字体', file: 'termuxA组/4_乌班图字体.html', icon: '🔤', description: 'Ubuntu字体设置与优化' },
    { name: 'cordova工具安装', file: 'termuxA组/5_安卓工具安装.html', icon: '📱', description: 'Termux常用工具安装指南' },
    { name: 'cflow一键安装', file: 'termuxA组/6.cflow一键安装.html', icon: '🔧', description: 'cflow工具安装配置' },
    { name: 'Python文件处理', file: 'termuxA组/7.Python文件处理安装.html', icon: '🐍', description: 'Python文件处理工具安装' }
  ],

  /* --------------------- 公共方法 --------------------- */
  // 获取所有工具
  getAllTools() { return this.tools; },


};
