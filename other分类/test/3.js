function getSelectorsForElement(selector, callback) {
    const element = document.querySelector(selector);
    const styleSheetUrls = new Set();
    const selectors = [];

    // 获取元素所在的所有样式表的URL
    const styleSheets = element.ownerDocument.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
        const styleSheet = styleSheets[i];
        if (styleSheet.href) {
            styleSheetUrls.add(styleSheet.href);
        }
    }

    // 遍历样式表URL并使用JSONP获取响应文本
    let remaining = styleSheetUrls.size;
    styleSheetUrls.forEach((styleSheetUrl) => {
        const link = document.createElement('link');
        link.src = `${styleSheetUrl}?callback=handleStyleSheetText`;
        document.head.appendChild(link);

        function handleStyleSheetText(text) {
            debugger;
            // 将文本插入到一个隐藏的div中
            const div = document.createElement('div');
            div.style.display = 'none';
            div.innerHTML = `<style>${text}</style>`;
            document.body.appendChild(div);

            // 遍历样式表中的所有规则
            const styleSheet = div.querySelector('style').sheet;
            const rules = styleSheet.cssRules || styleSheet.rules;
            for (let i = 0; i < rules.length; i++) {
                const rule = rules[i];

                // 检查规则是否为 CSS 样式规则并匹配目标元素
                if (rule instanceof CSSStyleRule && element.matches(rule.selectorText)) {
                    selectors.push(rule.selectorText);
                }
            }

            // 删除隐藏的div和对应的样式表
            document.body.removeChild(div);
            remaining--;
            if (remaining === 0) {
                callback(selectors);
            }
        }
    });
}
