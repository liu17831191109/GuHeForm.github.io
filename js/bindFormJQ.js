//当手机端的时候效果展示
// if(document.body.clientWidth < 700){
// 	$("body.bindingSample .form .box").css("position","initial");
// }


$(function(){
    // 兼容IE9下的placeholder
    function placeholderSupport() {
        return 'placeholder' in document.createElement('input');
    }
    if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
        $("[placeholder]").each(function(){
            var _this = $(this);
            var left = _this.css("padding-left");
            _this.parent().append('<span class="placeholder" data-type="placeholder" style="left: ' + left + '">' + _this.attr("placeholder") + '</span>');
            if(_this.val() != ""){
                _this.parent().find("span.placeholder").hide();
            }
            else{
                _this.parent().find("span.placeholder").show();
            }
        }).on("focus", function(){
            $(this).parent().find("span.placeholder").hide();
        }).on("blur", function(){
            var _this = $(this);
            if(_this.val() != ""){
                _this.parent().find("span.placeholder").hide();
            }
            else{
                _this.parent().find("span.placeholder").show();
            }
        });
        // 点击表示placeholder的标签相当于触发input
        $("span.placeholder").on("click", function(){
            $(this).hide();
            $(this).siblings("[placeholder]").trigger("click");
            $(this).siblings("[placeholder]").trigger("focus");
        });
    }
})
// 当屏幕小于550px的时候，点击按钮实现三个等于号变×的效果和动画效果。
$(".btn").click(function() {
	$(".btn span:nth-of-type(1)").toggleClass("active");
	$(".btn span:nth-of-type(2)").toggleClass("active");
	$(".btn span:nth-of-type(3)").toggleClass("active");
});
$(".btn").click(function() {
	$("header nav.header ul.none").stop().slideToggle();
})
//下滑效果必须代码
$(".Instruc").click(function() {
	$(".Instructions-box").show();
	$(".Instructions-content").delay(500).stop().animate({
		"opacity": "1",
		"top": "45%"
	}, 800)
})
$(".Instructions-content i").click(function() {
	$(".Instructions-content").stop().animate({
		"opacity": "0",
		"top": "35%"
	}, 200, function() {
		$(".Instructions-box").hide();
	})
})
$("#EndReturn").click(function(){
	$("#End-content").removeClass("active");
	$("#End").delay(500).hide();
	$(".form").show();
	$(".formTotal").stop().animate({"top":"50%","opacity":"1"},500);
})
$(".healthBacterial ul.Columns li i").click(function(){
	$(this).toggleClass("active");
	$(this).next().slideToggle();
})
$(document).ready(function(){
	if($("body").width() < 1200){
		$(".otalbacterialTotal").after($(".chart"));
	}
})
$("#EndBtnTwo").click(function(){
	$("#End-content").removeClass("active");
	$("#End").hide();
	$("#user").val("");
	$("#inputInfo").html("");
	$("#inputIf").hide();
	$("#yes").html("");
})

//下滑效果必须代码

$("ul.unhealthy li").click(function(){

	var index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$("ul.Columns>li").eq(index).show().siblings().hide();
})

//谷禾健康表单开始


var page = 0;
var infoDivLength;
var names = document.getElementById("name");
var userAge = document.getElementById("userAge");

var a = false;
$("#userAge").change(function() {
	if ($("#userAge").val() == "请选择您的年龄*必填") {
		a = false;
		$("#nameFailure").html("*年龄是必填项!");
		$("#bindingSample").removeClass("success");
	
	}else if ($("#userAge").val() != "请选择您的年龄*必填"){
		a = true;
		
	}else if ($("#userAge").val() != "请选择您的年龄*必填" && names.value != ""){
		$("#bindingSample").css({"cursor":"pointer"});
		$("#bindingSample").removeClass("failure");
		$("#bindingSample").addClass("success");
	}
})
$("#bindingSample").click(function(){
	if ($("#name").val() == "") {
		$("#nameJudgment").html("填写姓名才可以直接绑定样品!");
	}else if (userAge.value == "请选择您的年龄*必填") {
		$("#nameFailure").html("填写年龄才可以直接绑定样品!");
	}
})
function gaoDu(){
	if($(window).height() > 500){
		console.log("大于500")
	}else{
		console.log("小于500啦")
	}
}

//默认直接按钮隐藏
$("#bindingSample").hide();

var Hg;
//点击下一步该做什么
$("#infoNext").click(function() {

	if (page == 0) {
	//表单第一页判断开始
		if(a == true) {
			$("#nameFailure").html("");
			page++;
			$("#current").html(page+1);
			$(".info .info-div").eq(page).show().siblings().hide();
			$("#infoPrev").show();
			if(typesOf == 4){
				$("#infoNext").hide();
				$("#bindingSample").css({"right":"0","transform":"translate(0)"})
			}
		}else{
			$("#nextSpan").html("必填");
			$("#nameFailure").html("请选择您的年龄*必填!!!");
		}
		//表单第一页判断结束

		//表单第二页判断开始;
	} else if (page == 1) {
		if (names.value == "") {
			$("#nextSpan").html("必填");
			$("#infoPrev").show();
			$("#nameJudgment").html("*这是必填项,不能为空!");
		} else {
			$("#nextSpan").html("下一步");
			page++;
			$("#current").html(page+1);
			
			$(".info").find(Hg).eq(page-2).show().siblings().hide();
		} 
		//表单第二页判断结束;

		//判断点击完是否为最后一页
	}else if (page == infoDivLength - 2){
			page++;
			$("#current").html(page+1);
			$("#infoPrev").show();

			$(".info").find(Hg).eq(page-2).show().siblings().hide();
			$("#infoNext").hide();
			$("#bindingSample").css({"right":"0","transform":"translate(0)"})
	}
	 else {
	 	//对中间部分页码的总处理
	 	//第一个if是判断是否是必填页
		if (page < infoDivLength - 1 && $(".info").find(Hg).eq(page-2).hasClass("Required") == true){
			if(caaryOn == true){
				page++;
				$("#current").html(page+1);
				$("#infoPrev").show();
				$(".info").find(Hg).eq(page-2).show().siblings().hide();
				caaryOn = false
			}else{
				$("#infoNext").html("必填")
			}
			//非必填页执行代码如下
		}else if (page < infoDivLength - 1) {//page 0 1 2 3  infoDivLength = 4
			page++;
			$("#current").html(page+1);
			$("#infoPrev").show();
			$(".info").find(Hg).eq(page-2).show().siblings().hide();
		}
	}
})

//justNow是现在必填页填到了几页了
//比如说一共有10页,现在jsutNow等于9页,也就是说再填一页的话直接绑定按钮显示事件触发;
var justNow = 0;
//lengths = 4
//直接绑定按钮设置 开始
//caaryOn是对绑定页当前状态的检测,如果是false的话,点击下一步不好使,点不过去,迫使用户填信息才可以点下一步...
var caaryOn = false;
$('.info-div.Required input,.info-div.Required textarea,.info-div.Required select').change(function(){
	$("#infoNext").html("下一步")
	justNow++;
	caaryOn = true;
	console.log("现在的length是" + lengths +"<br>" + "现在的justNow是" + justNow)
	if(justNow == lengths){
		$("#bindingSample").show();
		$("#bindingSample").addClass("success");
	}
})
$('.info-div.Required section').append('<span class="requiredSpan">此项*必填</span>')

//点击上一步
$("#infoPrev").click(function() {

	if(typesOf == 4 && page == 1){
		$("#current").html(page);
		page--;
		$("#infoNext").show();
		$("#infoPrev").hide();
		$(".info .info-div").eq(page).show().siblings().hide();
		$("#nextSpan").html("下一步");
		$("#bindingSample").css({"right":"50%","transform":"translate(50%)"})
	}
	else if (page == 1) {
		$("#current").html(page);
		page--;
		
		$("#infoPrev").hide();
		$(".info .info-div").eq(page).show().siblings().hide();
		$("#nextSpan").html("下一步");
	}else if (page == infoDivLength - 1){ 
		$("#infoNext").show();
		$("#bindingSample").css({"right":"50%","transform":"translate(50%)"})
		$("#current").html(page);
		page--;

		$(".info").find(Hg).eq(page-2).show().siblings().hide();
		$("#infoPrev").show();
	}
	else{
		if(page < infoDivLength - 1 && page >= 2){
			if(page == 2){
				$("#current").html(page);
				page--;
				
				
				$("#nextSpan").html("下一步");
				$(".info .info-div").eq(page).show().siblings().hide();
			}else{
				$("#current").html(page);
				page--;
				
				$("#nextSpan").html("下一步");
				$(".info").find(Hg).eq(page-2).show().siblings().hide();
			}
			
		}
	}
})
//这个lengths是必填页的数量
var lengths = 0;
//姓名框必填事件
function nameKeyup(name) {
	if (name == "") {
		$("#nameJudgment").show();
		$("#bindingSample").hide();
		$("#nextSpan").html("必填");
		$("#nameJudgment").html("*这是必填项,不能为空!")
	} else {
		$("#nameJudgment").html("")
		if(typesOf != 4){
			for(var i = 0 ; i < $(".info").find(Hg).length ; i ++){
				var a = document.querySelectorAll(Hg)
				if(a[i].getAttribute("class").search("Required") > 0){
					lengths++;
				}
			}
			if($(".info").find(Hg).hasClass('Required')){

			}else{
				$("#bindingSample").show();
				$("#nameJudgment").html("")
				$("#bindingSample").css({"cursor":"pointer"});
				$("#bindingSample").removeClass("failure");
				$("#bindingSample").addClass("success");
				$("#nextSpan").html("下一步");
			}
		}else{
			$("#bindingSample").show();
			$("#nameJudgment").html("")
			$("#bindingSample").css({"cursor":"pointer"});
			$("#bindingSample").removeClass("failure");
			$("#bindingSample").addClass("success");
			$("#nextSpan").html("下一步");
		}
		
		
	}
	return lengths;
}
var windowsHeight = document.body.offsetHeight;
var userId = document.getElementById("userId");
var userIdOld = document.getElementById("user");

function forms(){
	userId.value = document.getElementById("user").value;
	$(".form").show();
	// document.getElementsByClassName("form")[0].style.minHeight = parseInt(windowsHeight)+50+"px";
	$(".formTotal").stop().animate({"top":"50%","opacity":"1"},500,function(){
		$("#current").html(page+1);
		$("#totalPage").html(infoDivLength);
	})
	if(document.body.offsetHeight > document.getElementsByClassName("form")[0].offsetHeight) {
		$("div.fixed").hide();
		$("body.bindingSample main").hide();
	}
	//Happening 情况 参数Hg为次单词缩写
	//1代表的是普通,2代表的是小孩,3代表的是老人,4代表的是特殊人群.
	console.log(typesOf)
	if(typesOf == 1){
		infoDivLength = $(".info .info-div.ordinary").length + 2;
		Hg = ".ordinary";
	}else if(typesOf == 2){
		infoDivLength = $(".info .info-div.child").length + 2;
		Hg = ".child";
	}else if(typesOf == 3){
		infoDivLength = $(".info .info-div.elderly").length + 2;
		Hg = ".elderly";
	}else if(typesOf == 4){
		infoDivLength = 2;
		// infoDivLength = $(".info .info-div.special").length;
		Hg = ".special";
	}else{
		alert("参数不在范围之内!!!")
	}

	// Happening(Hg)
	return userId.value,Hg,infoDivLength;
}
$("body.bindingSample .formTotal .goAway").click(function(){
	$(".formTotal").stop().animate({"top":"40%","opacity":"0"},500,function(){
		$(".form").hide();
	})
	$("div.fixed").show();
	$("body.bindingSample main").show();
})
$(".bacterialNote").parent().bind("click",function(){
	$(".bacterialNote").parent().css({"cursor":"pointer"});
	$(this).find("p").stop().animate({"right":"0px"},1000)
})
$("#currentt").click(function(){

	$("#currentt ul").toggleClass("active");
})
$(".otalbacterialTotal .classification .like .ification ul li i").click(function(){
	$(this).prev().toggleClass("active");
})
$("#nutNavigation li").click(function(){
	var index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$("#nutri li").eq(index).show().siblings().hide();
})

$(".disease").click(function(){
	var index = $(this).index()-1;
	if($(".disease").eq(index).find("input").prop('checked') == true){
		$(".disease").eq(index).find("input").val("on");
	}else{
		$(".disease").eq(index).find("input").val("");
	}
})
function serializeNotNull(serStr){
    return serStr.split("&").filter(function(str){return !str.endsWith("=")}).join("&");
}
//谷禾健康我的细菌结束
function tijiao() {
	if(userAge.value != "请选择您的年龄*必填" && $("#name").val() != ""){
		document.getElementsByClassName("form")[0].style.display= 'none';
		document.getElementById("End").style.display = 'block';
		document.getElementById("End-content").classList.add("active");
		if($("#textareaFood").val() == ""){
			$('#textareaFood').attr("disabled",true);
		}
		
		if($("#userFoodOne").val() == ""){
			$('#userFoodOne').attr("disabled",true);
		}
		
		if($("#userfecess").val() == ""){
			$('#userfecess').attr("disabled",true);
		}
		
		if($("#userfeces").val() == ""){
			$('#userfeces').attr("disabled",true);
		}
		
		if($("#star").val() == ""){
			$('#star').attr("disabled",true);
		}
		if($("#userFoodTwo").val() == ""){
			$('#userFoodTwo').attr("disabled",true);
		}
		$.ajax({
        	//几个参数需要注意一下
            type: "GET",//方法类型
            dataType: "json",//预期服务器返回的数据类型
            url: "http://www.guhejk.com/bindapi.php" ,//url
            data: $('#form1').serialize(),
            //调用这个函数打印的是去除空值的字符串
            // data: serializeNotNull($("form").serialize()),
            success: function (personData) {
            	$("#EndH1").html(personData.msg);
                if(personData.status == 1 || personData.status == 3){
					$("#EndH1").style.color = "#1cb833";
				}	else if(personData.status == 0 || personData.status == 2) {
					$("#EndH1").style.color = "#ec0104";
				}else{
					alert("参数不在范围之内")
				}
            },

            error : function() {
                alert("异常！");
            }
        });
	}    
}

$('#bindingSample').click(function() {
  alert($("#form1").serialize());
  return false;
});




	
	
