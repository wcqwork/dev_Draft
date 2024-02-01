<div id="${pageNodeId}" class="dynamic-list-container" data-block-uuid="productDetail_77454" data-default-setting={"prodId":"[\"\"]"}>
	[@api method="post" url="/phoenix2/composite/site/graphql/generateApiParam" apiType="productList" dataRange='{"list":["encodeId","prodName","prodBrief","enabledTrade","isSkuProd","prodPrice","photoUrlList","prodBrand","prodModel","prodCode","customFieldList","productSkuItem{skuOptionItemListStr,skuValueItemListStr}","phoenixProductTextVO{prodDescTitle,prodDescript}"]}']
		[@api method="post" url="/phoenix2/composite/graphql" prodId="${prodId}" query='{
			productList(conditionDto: {searchProdIds: $prodId, page: 0, limit: 1,prodType:"2"}) ${data.newDataRange}
		}']
			[#if data?? && data.productList?? && data.productList.list??]
				[#list data.productList.list as product]
				<div class="dynamic-component-container">
					[@develop_include appId="77454" styleId="-1" fileName="template_content.html" backendGuideReplace="<!-- editor_replace_place -->" /]
				</div>
				[/#list]
			[/#if]
		[/@api]
	[/@api]
</div>