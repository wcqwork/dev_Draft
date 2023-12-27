function getSelectorsForElement(selector) {
    const  _document = window.treeHelper.iframeContentDocument
    const element = _document.querySelector(selector);
    const selectors = [];
  
    // 遍历所有样式标签
    const styleTags = _document.getElementsByTagName('style');
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