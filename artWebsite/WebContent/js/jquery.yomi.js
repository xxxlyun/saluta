/** 
 * 湖南雅商网络科技有限公司
 * 倒计时插件
 * 刘文建
 */
(function($){
$.fn.yomi=function(){
	var data="";
	var _DOM=null;
	var TIMER;
	createdom =function(dom){
		_DOM=dom;
		data=$(dom).attr("data");
		data = data.replace(/-/g,"/");
		data = Math.round((new Date(data)).getTime()/1000);
		
		var	range  	= data-Math.round((new Date()).getTime()/1000),
					secday = 86400, sechour = 3600,
					days 	= parseInt(range/secday),
					hours	= parseInt((range%secday)/sechour),
					min		= parseInt(((range%secday)%sechour)/60),
					sec		= ((range%secday)%sechour)%60;
		$(_DOM).find(".yomiday").html(nol(days));
		$(_DOM).find(".yomihour").html(nol(hours));
		$(_DOM).find(".yomimin").html(nol(min));
		$(_DOM).find(".yomisec").html(nol(sec));
		
		
		if(range>0){
			setTimeout(function(){
				$(_DOM).html('拍卖已结束');
					
				return false;
				},range)
			
			$(_DOM).append("<ul class='yomi'><li class='yomiday'></li><li class='split'>:</li><li class='yomihour'></li><li class='split'>:</li><li class='yomimin'></li><li class='split'>:</li><li class='yomisec'></li></ul>")
		}else{
			$(_DOM).append('拍卖已结束');
			
		}

	};
	reflash=function(){
		var	range  	= data-Math.round((new Date()).getTime()/1000),
					secday = 86400, sechour = 3600,
					days 	= parseInt(range/secday),
					hours	= parseInt((range%secday)/sechour),
					min		= parseInt(((range%secday)%sechour)/60),
					sec		= ((range%secday)%sechour)%60;
		$(_DOM).find(".yomiday").html(nol(days));
		$(_DOM).find(".yomihour").html(nol(hours));
		$(_DOM).find(".yomimin").html(nol(min));
		$(_DOM).find(".yomisec").html(nol(sec));

	};
	TIMER = setInterval( reflash,1000 );
	nol = function(h){
					return h>9?h:'0'+h;
	}
	return this.each(function(){
		var $box = $(this);
		createdom($box);
	});
}
})(jQuery);


$(function(){
	$(".yomibox").each(function(){
		$(this).yomi();
	});
	$("head").append("<style type='text/css'>.yomi {list-style:none;}.yomi li{ }.yomi li.split{}</style>")
});








(function($){
$.fn.yomi2=function(){
	var data="";
	var _DOM=null;
	var TIMER;
	createdom =function(dom){
		_DOM=dom;
		data=$(dom).attr("data");
		data = data.replace(/-/g,"/");
		data = Math.round((new Date(data)).getTime());
		
		   	var	range  	= data-Math.round((new Date()).getTime()),
					secday = 86400000, sechour = 3600000,
					days 	= parseInt(range/secday),
					hours	= parseInt((range%secday)/sechour),
					min		= parseInt(((range%secday)%sechour)/60000),
					sec		= parseInt((((range%secday)%sechour)%60000)/1000),
					haom	= parseInt(((((range%secday)%sechour)%60000)%1000)/100);
					
					
		$(_DOM).find(".yomiday").html(nol(days));
		$(_DOM).find(".yomihour").html(nol(hours));
		$(_DOM).find(".yomimin").html(nol(min));
		$(_DOM).find(".yomisec").html(nol(sec));
		/*$(_DOM).find(".yomihaom").html(nol(haom));
		html	<li class='yomihaom'></li>
		*/
		
		
		if(range>0){
			setTimeout(function(){
				$(_DOM).html('拍卖已结束');
				//商品详情页面到时间两者切换
					$("#j_goods_detail_wenzi_starting").fadeOut("slow");;
					$("#j_goods_detail_start").fadeOut("slow");;
					$("#j_goods_detail_wenzi_ended").fadeIn("slow");
					$("#j_goods_detail_start_after").fadeIn("slow");
				return false;
				},range)
			$(_DOM).append("<ul class='yomi'><li class='yomiday'></li><li class='split'>天</li><li class='yomihour'></li><li class='split'>时</li><li class='yomimin'></li><li class='split'>分</li><li class='yomisec'></li><li class='split'>秒</li></ul>")
		}else{$(_DOM).append('<DIV class="jieshu">拍卖已结束</DIV>')}

	};
	reflash=function(){
		var	range  	= data-Math.round((new Date()).getTime()),
					secday = 86400000, sechour = 3600000,
					days 	= parseInt(range/secday),
					hours	= parseInt((range%secday)/sechour),
					min		= parseInt(((range%secday)%sechour)/60000),
					sec		= parseInt((((range%secday)%sechour)%60000)/1000),
					haom	= parseInt(((((range%secday)%sechour)%60000)%1000)/10);
					
					
		$(_DOM).find(".yomiday").html(nol(days));
		$(_DOM).find(".yomihour").html(nol(hours));
		$(_DOM).find(".yomimin").html(nol(min));
		$(_DOM).find(".yomisec").html(nol(sec));
		$(_DOM).find(".yomihaom").html(nol(haom));


	};
	TIMER = setInterval( reflash,10 );
	nol = function(h){
					return h>9?h:'0'+h;
	}
	return this.each(function(){
		var $box = $(this);
		createdom($box);
	});
}
})(jQuery);

$(function(){
	$(".yomibox2").each(function(){
		$(this).yomi2();
	});
	$("head").append("<style type='text/css'>.yomi {list-style:none;}.yomi li{ }.yomi li.split{}</style>")
});