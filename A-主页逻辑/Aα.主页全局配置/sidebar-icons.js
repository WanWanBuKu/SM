//==============================================
// SVG 图标库
//==============================================
(function() {
    'use strict';

    // 图标定义
    const ICONS = {
        // 背景图标
        background: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
        </svg>`,
        
        // 关闭图标
        close: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>`,
        
        // 文件导出图标
        export: `<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>`,
        
        // 文件导入图标
        import: `<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
        </svg>`,
        
        // 复制图标
        copy: `<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
        </svg>`,
        
        // 粘贴图标
        paste: `<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"/>
        </svg>`
    };

    // 替换图标函数
    function replaceIcons() {
        const iconElements = document.querySelectorAll('[data-icon]');
        iconElements.forEach(element => {
            const iconName = element.getAttribute('data-icon');
            if (ICONS[iconName]) {
                element.innerHTML = ICONS[iconName];
                element.style.display = 'inline-flex';
                element.style.alignItems = 'center';
                element.style.justifyContent = 'center';
            }
        });
    }

    // 动态创建图标函数
    window.createIcon = function(iconName, size = 20) {
        const iconSvg = ICONS[iconName];
        if (!iconSvg) {
            console.warn(`图标 "${iconName}" 不存在`);
            return '';
        }
        
        // 替换尺寸
        const sizedSvg = iconSvg.replace(/width="20" height="20"/g, `width="${size}" height="${size}"`)
                                .replace(/width="24" height="24"/g, `width="${size}" height="${size}"`);
        return sizedSvg;
    };

    // 监听 DOM 变化
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // 元素节点
                        const icons = node.querySelectorAll ? node.querySelectorAll('[data-icon]') : [];
                        icons.forEach(icon => {
                            const iconName = icon.getAttribute('data-icon');
                            if (ICONS[iconName]) {
                                icon.innerHTML = ICONS[iconName];
                                icon.style.display = 'inline-flex';
                                icon.style.alignItems = 'center';
                                icon.style.justifyContent = 'center';
                            }
                        });
                    }
                });
            }
        });
    });

    // DOM 加载完成后替换所有图标
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            replaceIcons();
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    } else {
        replaceIcons();
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

})();
