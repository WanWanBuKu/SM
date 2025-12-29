// 将CSS样式通过JS注入到页面中
(function() {
    const css = `
        /* 1. 基础样式：所有代码块和行内代码 */
        code[class*="language-"],
        pre[class*="language-"] {
            color: #000;
            background: none;
            font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
            font-size: 1em;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            line-height: 1.5;
            -moz-tab-size: 4;
            -o-tab-size: 4;
            tab-size: 4;
            -webkit-hyphens: none;
            -moz-hyphens: none;
            -ms-hyphens: none;
            hyphens: none;
        }

        /* 2. Pre 容器样式 */
        pre[class*="language-"] {
            position: relative;
            margin: .5em 0;
            overflow: visible;
            padding: 1px;
        }

        /* 3. 代码块内部样式：左侧蓝条、阴影、条纹背景 */
        pre[class*="language-"] > code {
            position: relative;
            z-index: 1;
            border-left: 10px solid #358ccb;
            box-shadow: -1px 0 0 0 #358ccb, 0 0 0 1px #dfdfdf;
            background-color: #fdfdfd;
            background-image: linear-gradient(transparent 50%, rgba(69, 142, 209, .04) 50%);
            background-size: 3em 3em;
            background-origin: content-box;
            background-attachment: local;
        }

        /* 4. Code 元素通用样式 */
        code[class*="language-"] {
            max-height: inherit;
            height: inherit;
            padding: 0 1em;
            display: block;
            overflow: auto;
        }

        /* 5. 背景色与盒模型设置 */
        :not(pre) > code[class*="language-"],
        pre[class*="language-"] {
            background-color: #fdfdfd;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            margin-bottom: 1em;
        }

        /* 6. 行内代码样式 (非 pre 包裹) */
        :not(pre) > code[class*="language-"] {
            position: relative;
            padding: .2em;
            border-radius: .3em;
            color: #c92c2c;
            border: 1px solid rgba(0, 0, 0, .1);
            display: inline;
            white-space: normal;
        }

        /* 7. 纸张卷角阴影效果 (前) */
        pre[class*="language-"]:after,
        pre[class*="language-"]:before {
            content: '';
            display: block;
            position: absolute;
            bottom: .75em;
            left: .18em;
            width: 40%;
            height: 20%;
            max-height: 13em;
            box-shadow: 0 13px 8px #979797;
            -webkit-transform: rotate(-2deg);
            -moz-transform: rotate(-2deg);
            -ms-transform: rotate(-2deg);
            -o-transform: rotate(-2deg);
            transform: rotate(-2deg);
        }

        /* 8. 纸张卷角阴影效果 (后) */
        pre[class*="language-"]:after {
            right: .75em;
            left: auto;
            -webkit-transform: rotate(2deg);
            -moz-transform: rotate(2deg);
            -ms-transform: rotate(2deg);
            -o-transform: rotate(2deg);
            transform: rotate(2deg);
        }

        /* 9. 注释样式 */
        .token.block-comment,
        .token.cdata,
        .token.comment,
        .token.doctype,
        .token.prolog {
            color: #7d8b99;
        }

        /* 10. 标点符号 */
        .token.punctuation {
            color: #5f6364;
        }

        /* 11. 标签、布尔值、常量等 (红色) */
        .token.boolean,
        .token.constant,
        .token.deleted,
        .token.function-name,
        .token.number,
        .token.property,
        .token.symbol,
        .token.tag {
            color: #c92c2c;
        }

        /* 12. 属性名、函数、字符串等 (绿色) */
        .token.attr-name,
        .token.builtin,
        .token.char,
        .token.function,
        .token.inserted,
        .token.selector,
        .token.string {
            color: #2f9c0a;
        }

        /* 13. 操作符、URL、变量 (褐色) */
        .token.entity,
        .token.operator,
        .token.url,
        .token.variable {
            color: #a67f59;
            background: rgba(255, 255, 255, .5);
        }

        /* 14. 关键字、类名等 (蓝色) */
        .token.atrule,
        .token.attr-value,
        .token.class-name,
        .token.keyword {
            color: #1990b8;
        }

        /* 15. 正则、重要标记 (橙色) */
        .token.important,
        .token.regex {
            color: #e90;
        }

        /* 16. CSS 语言中的字符串特殊处理 */
        .language-css .token.string,
        .style .token.string {
            color: #a67f59;
            background: rgba(255, 255, 255, .5);
        }

        /* 17. 重要标记字体粗细 */
        .token.important {
            font-weight: 400;
        }

        /* 18. 加粗 */
        .token.bold {
            font-weight: 700;
        }

        /* 19. 斜体 */
        .token.italic {
            font-style: italic;
        }

        /* 20. 实体光标 */
        .token.entity {
            cursor: help;
        }

        /* 21. 命名空间透明度 */
        .token.namespace {
            opacity: .7;
        }

        /* 22. 响应式调整：移动端移除阴影 */
        @media screen and (max-width: 767px) {
            pre[class*="language-"]:after,
            pre[class*="language-"]:before {
                bottom: 14px;
                box-shadow: none;
            }
        }

        /* 23. 行号支持 */
        pre[class*="language-"].line-numbers.line-numbers {
            padding-left: 0;
        }
        pre[class*="language-"].line-numbers.line-numbers code {
            padding-left: 3.8em;
        }
        pre[class*="language-"].line-numbers.line-numbers .line-numbers-rows {
            left: 0;
        }

        /* 24. 高亮特定行支持 */
        pre[class*="language-"][data-line] {
            padding-top: 0;
            padding-bottom: 0;
            padding-left: 0;
        }
        pre[data-line] code {
            position: relative;
            padding-left: 4em;
        }

        /* 25. 行高亮 */
        pre .line-highlight {
            margin-top: 0;
        }
    `;
    
    // 创建一个style元素
    const style = document.createElement('style');
    
    // 将CSS字符串设置到style元素中
    style.textContent = css;
    
    // 将style元素添加到文档的head中，使样式生效
    document.head.appendChild(style);
})();
