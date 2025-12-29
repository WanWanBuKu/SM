window.navConfig = {
  /* --------------------- 工具列表 --------------------- */
  tools: [
    { name: '常用命令', file: '1.常用命令.html', icon: '🐧', description: '常用Linux命令参考' },
    { name: 'ESP32 AT指令', file: '2.ESP32_AT指令.html', icon: '📶', description: 'ESP32 AT指令参考' },
    { name: 'GitHub项目', file: '3.GitHub_python项目.html', icon: '🐍', description: 'Python项目资源' },
    { name: '油猴脚本', file: '6.油猴脚本/油猴脚本.html', icon: '🐒', description: '油猴脚本管理与使用' },
    { name: '渗透测试', file: '5_渗透测试.html', icon: '🔍', description: '渗透测试相关工具和资源' },
    { name: '10月脚本', file: '4_10月脚本.html', icon: '📜', description: '10月常用脚本集合' }
  ],

  // 获取所有工具
  getAllTools: function() {
    return this.tools;
  }
};
