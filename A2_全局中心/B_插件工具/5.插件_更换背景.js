// ===============================================
// 更换背景插件 (右上角文字版)
// 功能：拥有独立的背景管理和存储系统
// ===============================================
(function() {
    'use strict';

    // --- 插件私有配置 ---
    const PLUGIN_CONFIG = {
        // 🎯 核心：使用独立的localStorage键名，避免与主页面冲突
        PLUGIN_BG_CHANGER_KEY: 'plugin_bgChanger_background',
        // 插件自己的默认背景路径
        defaultBackgroundPath: '/A-主页逻辑/Aα.主页全局配置/sidebar.jpg' // 可以修改为您希望的任何路径
    };

    window.plugin_bgChanger = {
        instance: null,

        start(opts) {
            if (this.instance) return; // 防止重复创建

            const container = document.createElement('div');
            container.id = 'bg-changer-plugin-container';
            container.style.cssText = `
                position: fixed; top: 20px; right: 20px; z-index: 9999;
                display: flex; align-items: center; gap: 10px;
            `;

            // 创建隐藏的文件输入框
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.style.display = 'none';
            fileInput.id = 'bg-changer-file-input';

            // 创建"更换背景"文字按钮
            const changeBtn = this.createTextButton('更换背景', () => {
                fileInput.click();
            });

            // 监听文件选择
            fileInput.addEventListener('change', (event) => this.handleFileSelect(event));

            container.appendChild(fileInput);
            container.appendChild(changeBtn);

            document.body.appendChild(container);

            // 🎯 核心：插件启动时，立即加载并应用之前保存的背景
            this.loadAndApplySavedBackground();

            this.instance = { container, fileInput };
        },

        stop() {
            if (this.instance && this.instance.container) {
                document.body.removeChild(this.instance.container);
                this.instance = null;
            }
        },

        createTextButton(text, onClick) {
            const btn = document.createElement('div');
            btn.textContent = text;
            btn.style.cssText = `
                background: rgba(0, 0, 0, 0.7); color: #ffd700; border: 1px solid rgba(255, 215, 0, 0.3);
                padding: 8px 15px; border-radius: 5px; cursor: pointer; font-size: 14px; font-weight: bold;
                backdrop-filter: blur(5px); transition: all 0.3s ease; white-space: nowrap;
            `;
            btn.addEventListener('click', onClick);
            btn.addEventListener('mouseenter', () => {
                btn.style.background = 'rgba(0, 0, 0, 0.9)';
                btn.style.borderColor = 'rgba(255, 215, 0, 0.5)';
                btn.style.transform = 'scale(1.05)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.background = 'rgba(0, 0, 0, 0.7)';
                btn.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                btn.style.transform = 'scale(1)';
            });
            return btn;
        },

        // 🎯 核心：加载并应用已保存的背景
        loadAndApplySavedBackground() {
            const savedBg = localStorage.getItem(PLUGIN_CONFIG.PLUGIN_BG_CHANGER_KEY);
            if (savedBg) {
                this.applyBackground(savedBg);
                console.log('插件已加载用户自定义背景');
            } else {
                this.applyBackground(PLUGIN_CONFIG.defaultBackgroundPath);
                console.log('插件已应用默认背景');
            }
        },

        handleFileSelect(event) {
            const file = event.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const imageUrl = e.target.result;
                    this.applyBackground(imageUrl);
                    // 🎯 核心：将图片的base64数据保存到插件独立的localStorage中
                    localStorage.setItem(PLUGIN_CONFIG.PLUGIN_BG_CHANGER_KEY, imageUrl);
                    this.showToast('背景图片已更新并持久化存储');
                };
                reader.readAsDataURL(file);
            }
            // 清空input值，允许重复选择同一文件
            event.target.value = '';
        },

        applyBackground(imageUrl) {
            document.body.style.backgroundImage = `url(${imageUrl})`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundAttachment = 'fixed';
        },
        
        showToast(message, duration = 3000) {
            // 使用工具箱的通知方法，如果不存在则用简单的alert
            if (window.ToolboxManager && window.ToolboxManager.ui && window.ToolboxManager.ui.showNotification) {
                window.ToolboxManager.ui.showNotification(message);
            } else {
                alert(message);
            }
        }
    };
})();
