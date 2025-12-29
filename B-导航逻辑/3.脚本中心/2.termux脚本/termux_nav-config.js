window.navConfig = {
  /* --------------------- 工具列表 --------------------- */
  tools: [
    { name: 'bash本地服务', file: 'a.bash_本地服务/bash本地服务.html', icon: '🏠', description: '本地服务管理' },
    { name: 'bash网络服务', file: 'b.bash_网络服务/bash网络服务.html', icon: '🌐', description: '网络服务管理' },
    { name: 'python本地服务', file: 'c.python本地服务/py本地服务.html', icon: '🐍', description: 'Python本地服务' },
    { name: 'js中心/破解导航', file: 'e.js中心/JS源码导航.html', icon: '🔓', description: 'JS破解工具导航' },
    { name: 'golang脚本', file: 'f.golang脚本/go源码导航.html', icon: '🐿', description: 'Go源码导航' }
  ],

  /* --------------------- 公共方法 --------------------- */
  // 获取所有工具
  getAllTools() { return this.tools; },


};
