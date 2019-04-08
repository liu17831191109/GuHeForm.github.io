// bindingSample 表单信息开始
// 检测是否为ie6,7,8,9

if(navigator.appName == "Microsoft Internet Explorer" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i)=="7." || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8." || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i)=="9.") 
{ 
	document.getElementById("formTotal").style.marginLeft = '-450px';
	document.getElementById("formTotal").style.marginTop = '-400px'; 
	document.getElementById("End-content").style.marginLeft = '-350px';
	document.getElementById("End-content").style.marginTop = '-200px'; 
} 

var userFoodOne = document.getElementById("userFoodOne");
var userAge = document.getElementById("userAge");
var nameFailure = document.getElementById("nameFailure");
var disease = document.getElementsByName("disease");
var eatUserfecess = document.getElementById("userfecess");
var eatUserfeces = document.getElementById("userfeces");

function infoNextUserAge() {
	infoNext = document.getElementById("infoNext");
	bindingSample = document.getElementById("bindingSample")
	if (userAge.value == "请选择您的年龄*必填") {
		
	} else {
		nameFailure.innerHTML="";
		
		
	}
}
var tds=document.getElementsByTagName("td");
var tr = document.getElementsByTagName("tr");
    for(var i=0;i<tds.length;i++){
        tds[i].onmouseover=test;
        tds[i].onmouseout=testOut;
    }
    var starIndex;
    function  test(){

        for(var i=0;i<tds.length;i++){
            if(tds[i]==this)
            {
                starIndex=i;
            }
        }
        //选中的设置成红色 没选中的设置成黑色
        for(var i=0;i<=starIndex;i++) {
            tds[i].style.color = "red";
        }
        for(var i=starIndex+1;i<tds.length;i++){
            tds[i].style.color="black";
        }

    }
    function testOut() {
    	document.getElementById("star").value = (starIndex+1);
    	console.log("小星星得分是 " + (starIndex+1) + "分");
    }
var disease = document.querySelectorAll(".disease");
for(var i = 0 ; i < disease.length ; i++){
	disease[i].onclick=diseaseClick;
}
var diseaseIndex;

	function diseaseClick(){
		// document.getElementById("nextSpan").innerHTML="下一步";
		var Total = 0;
		//childNodes.item(0)
		for(var i = 0 ; i < disease.length ; i++){
			// if(disease[i] == this){
			// 	diseaseIndex = i;
			// 	console.log(disease[i].value);
			// }
			if(disease[i].checked == true){
				disease[i].value = "sb";
				Total++;
			}else{
				disease[i].value = "";
			}

		}
			if(Total > 0 || starIndex > -1){
			document.getElementById("nextSpan").innerHTML = "下一步";
		}
		if(Total == 0 && starIndex == -1){
			document.getElementById("nextSpan").innerHTML = "跳过";
		}

	}
	//阻止form表单提交	 
	function checkForm(){
		return false
	}
