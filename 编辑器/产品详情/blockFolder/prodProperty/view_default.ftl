<div id="${pageNodeId}" class="prodProperty" data-block-uuid="prodProperty" data-minimumUnit-component='{"list":["prodBrand","prodModel","prodCode","customFieldList","productPropVo{propTypeList{name  valueList{name}}}"]}' data-default-setting={}>
  [#if product?? && ((product.prodBrand?? && product.prodBrand != '') || (product.prodModel?? && product.prodModel != '') || (product.prodCode?? && product.prodCode != '') || (product.customFieldList?? && product.customFieldList?size > 0) || (product.productPropVo.propTypeList?? && product.productPropVo.propTypeList?size > 0))]
  <div class="detial-cont-divsions detial-cont-itemspecifics">
    <ul class="pro-itemspecifics-list fix">
      [#-- 产品型号 --]
      [#if product.prodModel?? && product.prodModel != '']
      <li>
        <label>
          型号：
        </label>
        <p>
          ${product.prodModel}
        </p>
      </li>
      [/#if]
      [#-- 产品品牌 --]
      [#if product.prodBrand?? && product.prodBrand != '']
      <li>
        <label>
          产品品牌：
        </label>
        <p>
          ${product.prodBrand!}
        </p>
      </li>
      [/#if]
      [#-- 产品编码 --]
      [#if product.prodCode?? && product.prodCode != '']
      <li>
        <label>
          产品编码：
        </label>
        <p>
          ${product.prodCode!}
        </p>
      </li>
      [/#if]
      [#-- 产品自定义字段 --]
      [#if product.customFieldList?? && product.customFieldList?size > 0]
      [#list product.customFieldList as customField]
      <li>
        <label>
          ${customField.fieldName!}：
        </label>
        <p>
          ${customField.fieldValue!}
        </p>
      </li>
      [/#list]
      [/#if]
      [#-- 产品私有属性 --]
      [#if product.productPropVo.propTypeList?? && product.productPropVo.propTypeList?size > 0]
      [#list product.productPropVo.propTypeList as itemPropVo]
      <li>
        <label>
          ${itemPropVo.name!}
        </label>
        [#if itemPropVo.valueList?? && itemPropVo.valueList?size > 0]
        [#list itemPropVo.valueList as itemPropValue]
        <p>
          ${itemPropValue.name!}
        </p>
        [/#list]
        [/#if]
      </li>
      [/#list]
      [/#if]
    </ul>
  </div>
  [#else]
  [@web_backend]
  请在后台添加产品属性
  [/@web_backend]
  [/#if]
</div>