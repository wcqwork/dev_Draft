(function(window, $, undefined) {
    var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
    var name = "sku77391_style1";
    var sku77391_style1 = _block_namespaces_[name] || (_block_namespaces_[name] = {});
    $.extend(sku77391_style1, {
        "init": init
    })

    function init(nodeObj) {
        if (!!!nodeObj) {
            return;
        }
        console.log('sku 111111111111')
        var $selector = $('#' + nodeObj.pageNodeId);

        const renderSku = function(options){
            // options
            const { nodeId,moutedEl, skuOptionItemList, skuValueItemList } = options;
            const { html, render, useReducer, Component, useState, useMemo } = window.leadPreact;
            const SpecAdjoinMatrix = window.leadd_SpecAdjoinMatrix
            const initialState = {
                specList: JSON.parse(skuOptionItemList) || [],
                specCombinationList: JSON.parse(skuValueItemList) || []
            };
            var defaultTransValue = JSON.parse(skuValueItemList).length > 0 && JSON.parse(skuValueItemList)[0].transValueList;
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
                const selectedCombination = specAdjoinMatrix.getSelectedSpecCombinationList(specsS)
                // 通知所有订阅
                if(leadComponentSite && leadComponentSite.globalMinimumUnitEvent && nodeId){
                    leadComponentSite.globalMinimumUnitEvent.emit(nodeId, selectedCombination)
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
                    ${specList.map(({ skuName, transNameList,transImageList }, index) => html`
                        <div className="sku_item" key=${index}>
                        <p className="skuName">${skuName}：</p>
                        <div className="specBox">
                            ${transNameList.map((value, i) => {
                                const isOption = optionSpecs.includes(value); // 当前规格是否可选
                                const isActive = specsS.includes(value); // 当前规格是否被选
                                return html`<div
                                    key=${i}
                                    className=${classNames({
                                        specOption: isOption,
                                        specAction: isActive,
                                        specDisabled: !isOption,
                                    })}
                                    onClick=${() => handleClick(isOption, value, index)}
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
        leadComponentSite.miniUnitSku.init(params);
    }
})(window, jQuery);