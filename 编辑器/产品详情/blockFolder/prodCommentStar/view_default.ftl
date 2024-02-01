<div id="${pageNodeId}" class="commentStar" data-block-uuid="commentStar" data-minimumUnit-component="commentStar" data-hasChild-element="1" data-default-setting={}>
  [#assign comentStrNums = product.commentStar!5]
  [#list comentStrNums as itemNum]
  [#if itemNum?number gt 0]
  <span class="icon iconfont_phoenix icon-pingjia-fill lead-icon-type"></span>
  [/#if]
  [/#list]
</div>