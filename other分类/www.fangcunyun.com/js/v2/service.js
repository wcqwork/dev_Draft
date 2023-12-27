$(function(){
	$("#ctChange").click(function(){
		$("#validCode").val("");
		$(this).children().attr("src", "/captchas/" + new Date().getTime() + ".jpg");
	});
	$("#ctChange").prev().click(function(){
		$(this).prev().val("");
		$(this).attr("src", "/captchas/" + new Date().getTime() + ".jpg");
	});
	
	$("#freeUse").click(function(){
		var validCode = $("#validCode").val();
		var mobile = $("#mobile").val();
		var errorMsg = "";
		if(!validCode){
			errorMsg = "请输入图形验证码";
		} else if(!mobile){
			errorMsg = "请输入手机号";
		} else {
			var mobileRegx = /^(((1[1-9][0-9]{1})|(15[0-9]{1}))+\d{8})$/;
			if(!mobileRegx.test(mobile)){
				errorMsg = "请输入正确的手机号";
			}
		}
		if(!errorMsg){
			sendFreeUseMsg(mobile, validCode);
		} else {
			layer.msg(errorMsg);
		}
	});
});

function sendFreeUseMsg(mobile, validCode){
	$.ajax({
		url:"/service/freeUse",
		data:{
			mobile: mobile,
			validCode: validCode
		},
		type:"post",
		cache:false,
		dataType:"json",
		success:function(data){
			var status = data.status;
			var msg = "";
			if(status == 1){
				msg = "申领成功！";
				$("#ctChange").children().attr("src", "/captchas/" + new Date().getTime() + ".jpg");
				$("#mobile").val("");
				$("#validCode").val("");
			} else if(status == 2 || status == 3){
				msg = "图形验证码输入有误";
			}
			layer.msg(msg);
		},
		error:function(){

		}
	});
}