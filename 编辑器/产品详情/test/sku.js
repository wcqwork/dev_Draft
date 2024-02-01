(function(window, $, undefined) {
  var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
  var name = "sku77391_style1";
  var sku77391_style1 = _block_namespaces_[name] || (_block_namespaces_[name] = {});
  $.extend(sku77391_style1, {
      "init": init
  })

  async function init(nodeObj) {
      if (!!!nodeObj) {
          return;
      }
      console.log('sku 111111111111')
      var $selector = $('#' + nodeObj.pageNodeId);

      function addSkulevel(skuOptionItemList){
          return skuOptionItemList.map((value,index,array) => {
              const transNameList = value.transNameList;
              if(transNameList && transNameList.length > 0){
                  const transUniqueList = transNameList.map((tranValue,tranIndex) => {
                      return tranValue + '_level' + index;
                  })
                  value.transUniqueList = transUniqueList;
              }
              return value;
          })
      }

      function addSkuCombinationLevel(skuValueItemList){
          return skuValueItemList.map((value,index,array) => {
              const transValueList = value.transValueList;
              if(transValueList && transValueList.length > 0){
                  const transValueUniqueList = transValueList.map((tranValue,tranIndex) => {
                      return tranValue + '_level' + tranIndex;
                  })
                  value.transValueUniqueList = transValueUniqueList;
              }
              return value;
          })
      }

      const renderSku = function(options){
          // options
          const { nodeId,moutedEl, skuOptionItemList, skuValueItemList } = options;
          console.log(window.leadPreact);
          const { html, render, useReducer, Component, useState, useMemo } = window.leadPreact;
          const SpecAdjoinMatrix = window.leadd_SpecAdjoinMatrix;
          var nodeExtendParams = _block_namespaces_[nodeId] || (_block_namespaces_[nodeId] = {});
          $.extend(nodeExtendParams,{
              getSkuParams:function getSkuParams() {
                  var prodDetailContainer = $selector.parents('.dynamic-component-container');
                  var skuEl = prodDetailContainer.find('[name="skuParam"]');
                  if (skuEl.length > 0) {
                      var skuParamStr = skuEl.val();
                      var skuParam = JSON.parse(skuParamStr);
                      return skuParam;
                  }
              }
          })
          var origin_skuOptionItemList = JSON.parse(skuOptionItemList) || [];
          origin_skuOptionItemList = addSkulevel(origin_skuOptionItemList);

          var origin_skuValueItemList = JSON.parse(skuValueItemList) || [];
          origin_skuValueItemList = addSkuCombinationLevel(origin_skuValueItemList);

          const initialState = {
              specList: origin_skuOptionItemList || [],
              specCombinationList: origin_skuValueItemList || []
          };
          const _defauJsonSkuValue = JSON.parse(JSON.stringify(origin_skuValueItemList));
          var defaultTransValue = _defauJsonSkuValue.length > 0 && _defauJsonSkuValue[0].transValueUniqueList;
          class Sku extends Component {
              render() {
              const { specList, specCombinationList } = initialState;
              // 已选择的规格，长度为规格列表的长度
              const [specsS, setSpecsS] = useState(defaultTransValue || Array(specList.length).fill(""));

              // 创建一个规格矩阵
              const specAdjoinMatrix = useMemo(() => new SpecAdjoinMatrix(specList, specCombinationList), [specList, specCombinationList]);
              // 获得可选项表
              const optionSpecs = specAdjoinMatrix.getSpecscOptions(specsS);
              // 获取选择的规格对象
              const selectedCombination = specAdjoinMatrix.getSelectedSpecCombinationList(specsS);
              // 通知所有订阅
              if(leadComponentSite && leadComponentSite.globalMinimumUnitEvent && nodeId){
                  const notifyOriginType = 'sku';
                  leadComponentSite.globalMinimumUnitEvent.emit(nodeId,notifyOriginType, selectedCombination)
              }

              const handleClick = function (bool, text, index) {
                  // 排除可选规格里面没有的规格
                  if (specsS[index] !== text && !bool) return;
                  // 根据text判断是否已经被选中了
                  specsS[index] = specsS[index] === text ? "" : text;
                  setSpecsS(specsS.slice());
              };

              const classNames = (...args) => {
                  let strClass = ''
                  for (let itemObj of args) {
                  for (let [key, val] of Object.entries(itemObj)) {
                      if (val) {
                      strClass += key + ' '
                      }
                  }
                  }
                  return strClass
              }

              return html`
                  <div className="sku_container">
                  ${specList.map(({ skuName, transNameList,transImageList,transUniqueList }, index) => html`
                      <div className="sku_item" key=${index}>
                      <p className="skuName">${skuName}：</p>
                      <div className="specBox">
                          ${transNameList.map((value, i) => {
                              const _uniqueValue = transUniqueList[i];
                              const isOption = optionSpecs.includes(_uniqueValue); // 当前规格是否可选
                              const isActive = specsS.includes(_uniqueValue); // 当前规格是否被选
                              return html`<div
                                  key=${i}
                                  className=${classNames({
                                      specOption: isOption,
                                      specAction: isActive,
                                      specDisabled: !isOption,
                                  })}
                                  onClick=${() => handleClick(isOption, _uniqueValue, index)}
                                  >
                                  ${transImageList[i] ? html`<img class='transImage' src='${transImageList[i]}'/>` : ''}
                                  ${value}
                              </div>`
                          })}
                      </div>
                      </div>
                  `)}
                  </div>
                  <input type="hidden" name="skuParam" value=${JSON.stringify(selectedCombination)} />
              `;
              }
          }

          render(html`<${Sku} />`, document.querySelector(moutedEl));
      }
      const componentParams = {
          callback:function(){
              console.log('sku init callback')
              renderSku(nodeObj)
          }
      }
      const params = Object.assign(nodeObj,componentParams)
      await leadComponentSite.miniUnitSku.init(params);
      console.log('sku--------------');
  }
})(window, jQuery);