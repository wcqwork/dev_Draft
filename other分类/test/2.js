function getSelectorsForElement(selector) {
    const element = document.querySelector(selector);
    const selectors = [];

    // 遍历所有样式标签
    const allStyleSheets = document.styleSheets;
    for (let i = 0; i < allStyleSheets.length; i++) {
        const styleSheet = allStyleSheets[i];
        const linkSrc = styleSheet.href;
        // 使用示例
        loadStylesheet(linkSrc).then(() => {
            console.log('样式表加载完成');
            debugger;
        }).catch((error) => {
            console.error('样式表加载失败', error);
            debugger;
        });
    }

    return selectors;
}




function loadStylesheet(url) {
    return new Promise((resolve, reject) => {
        const callbackName = 'loadStylesheetCallback';
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url + '?callback=' + callbackName;
        document.head.appendChild(link);

        window[callbackName] = () => {
            document.head.removeChild(link);
            delete window[callbackName];
            resolve();
        };
    });
}