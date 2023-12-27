function getSelectorsForElement(selector) {
    const element = document.querySelector(selector);
    const selectors = [];
  
    // 遍历所有样式标签
    const styleTags = document.getElementsByTagName('style');
    for (let i = 0; i < styleTags.length; i++) {
      const styleTag = styleTags[i];
      const rules = styleTag.sheet.cssRules || styleTag.sheet.rules;
  
      // 遍历样式标签中的所有规则
      for (let j = 0; j < rules.length; j++) {
        const rule = rules[j];
  
        // 检查规则是否为 CSS 样式规则并匹配目标元素
        if (rule instanceof CSSStyleRule && element.matches(rule.selectorText)) {
          selectors.push(rule.selectorText);
        }
      }
    }
  
    return selectors;
  }
  
  getSelectorsForElement('.xlx24-title-wrapper')


function inlineExternalStyles() {
  const linkTags = document.querySelectorAll('link[rel="stylesheet"]');

  linkTags.forEach(linkTag => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', linkTag.href, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const styleTag = document.createElement('style');
        styleTag.type = 'text/css';
        styleTag.appendChild(document.createTextNode(xhr.responseText));
        document.head.appendChild(styleTag);
        // linkTag.parentNode.removeChild(linkTag);
      }
    };
    xhr.send();
  });
}
  
inlineExternalStyles();
  