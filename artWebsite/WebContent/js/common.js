//placeholder
(function($){ 
	$.Placeholder = {
		settings : {
			color : "rgb(169,169,169)", 
			dataName : "original-font-color"
		},
		init : function(settings){
			if(settings){
				$.extend($.Placeholder.settings, settings);
			}
			var getContent = function(element){
				return $(element).val();		
			};
			var setContent = function(element, content){
				$(element).val(content);		
			};
			var getPlaceholder = function(element){
				return $(element).attr("placeholder");
			};
			var isContentEmpty = function(element){
				var content = getContent(element);
				return (content.length === 0) || content == getPlaceholder(element);
			};
			var setPlaceholderStyle = function(element){
				$(element).data($.Placeholder.settings.dataName, $(element).css("color"));
				$(element).css("color", $.Placeholder.settings.color);		
			};
			var clearPlaceholderStyle = function(element){
				$(element).css("color", $(element).data($.Placeholder.settings.dataName));		
				$(element).removeData($.Placeholder.settings.dataName);
			};
			var showPlaceholder = function(element){
				setContent(element, getPlaceholder(element));
				setPlaceholderStyle(element);	
			};
			var hidePlaceholder = function(element){
				if($(element).data($.Placeholder.settings.dataName)){
					setContent(element, "");
					clearPlaceholderStyle(element);
				}
			};
			var inputFocused = function(){
				if(isContentEmpty(this)){
					hidePlaceholder(this);		
				}
			};
			var inputBlurred = function(){
				if(isContentEmpty(this)){
					showPlaceholder(this);
				}
			};
			var parentFormSubmitted = function(){
				if(isContentEmpty(this)){
					hidePlaceholder(this);		
				}	
			};
			$("textarea, input[type='text']").each(function(index, element){
				if($(element).attr("placeholder")){
					$(element).focus(inputFocused);
					$(element).blur(inputBlurred);
					$(element).bind("parentformsubmitted", parentFormSubmitted);
					$(element).trigger("blur");
					$(element).parents("form").submit(function(){
						$(element).trigger("parentformsubmitted");
					});
				}
			});
			return this;
		},
        cleanBeforeSubmit : function(theForm){
            if(!theForm){
                theForm = $("form");
            }
            $(theForm).find("textarea, input[type='text']").trigger("parentformsubmitted");
            return theForm;
        }
	};
})(jQuery);
// back top
$(function() {
	$.fn.manhuatoTop = function(options) {
		var defaults = {			
			showHeight : 150,
			speed : 1000
		};
		var options = $.extend(defaults,options);
		$("body").prepend("<div id='totop'><a>返回</a></div>");
		var $toTop = $(this);
		var $top = $("#totop");
		var $ta = $("#totop a");
		$toTop.scroll(function(){
			var scrolltop=$(this).scrollTop();		
			if(scrolltop>=options.showHeight){				
				$top.show();
			}
			else{
				$top.hide();
			}
		});	
		$ta.hover(function(){ 		
			$(this).addClass("cur");	
		},function(){			
			$(this).removeClass("cur");		
		});	
		$top.click(function(){
			$("html,body").animate({scrollTop: 0}, options.speed);	
		});
	}
});
$(document).ready(function(){
	$('.information-tab ').each(function(){
		$(this).find('.nav li:last span').css('border','none');
	});
	$('.select-inner').each(function(){
		var $key = $(this);
		$key.find('li').click(function(){
			var value = $(this).text();
			$key.find('.inner-vaule').val(value);
		});
	});
	$('.last-ele').each(function(){
		$(this).find('li:last').css({'border':'0','margin-right':'0'});
	});
});
//common slide show >> max 5 pic
function commonSlideshow(el){
	if($('.common-slideshow').hasClass(el)){
		var obj = $('.common-slideshow .slide-img ul li');
		var objHeight = obj.height();
		var num = obj.length;
		var move = $('.common-slideshow .slide-img ul');
		var numObj = $('.common-slideshow .num-page ul li');
		numObj.eq(0).addClass('select');
		numObj.click(function(){
			numObj.removeClass('select');
			$(this).addClass('select');
			var current = parseInt($(this).html());
			if(!Number(current)) return false;
			switch(current){
				case 1:
					move.animate({top:'0px'},1000);
					break;
				case 2:
					move.animate({top:-(1*objHeight)+'px'},1000);
					break;
				case 3:
					move.animate({top:-(2*objHeight)+'px'},1000);
					break;
				case 4:
					move.animate({top:-(3*objHeight)+'px'},1000);
					break;
				case 5:
					move.animate({top:-(4*objHeight)+'px'},1000);
					break;
			}
		});
		function time(){
			currentNum = $('.common-slideshow .num-page ul li.select').html();
			if(currentNum == num){
				move.animate({top:'0px'},1000);
				numObj.removeClass('select');
				numObj.eq(0).addClass('select');
			}
			else{
				move.animate({top:-(currentNum*objHeight)+'px'},1000);
				numObj.removeClass('select');
				numObj.eq(currentNum).addClass('select');
			}
		}
		setInterval(time,5000);
	}
}
//common jump panel
function jumpPanel(hoverArea, jumpArea, addWord, commonJumpContent,commonJumpVal) {
    var w = $(hoverArea).parent().find(jumpArea).width();
    w = parseInt(w + 10);
    $(hoverArea).parent().find(jumpArea).css('width', w + 'px');
    ;
    $(hoverArea).css('width', w + 'px');
    $(hoverArea).hover(
        function () {
            $(jumpArea).show();
        },
        function () {
            $(jumpArea).hide();
        }
    );
    if (addWord == true) {
        $(jumpArea + ' ul li').on('click', function () {
            var word = $(this).text();
            var val = $(this).val();
            $(commonJumpContent).html(word);
            $(commonJumpVal).text(val);
            $(jumpArea).hide();
        });
    }
    ;
}
//common nav jump panel
function navJump(el,jumpDiv,click){
	if(click == 'click'){
		$(el).toggle(
			function(){
				$(jumpDiv).show();
			},
			function(){
				$(jumpDiv).hide();
			}
		);
	}
	else{
		$(el).hover(
			function(){
				$(this).find(jumpDiv).show();
			},
			function(){
				$(this).find(jumpDiv).hide();
			}
		);
	}
}
//common block 1 && 2 change
function abChange(allEl,el,block1,block2){
	$(el).mouseenter(function(){
		$(allEl).find(block2).hide();
		$(allEl).find(block1).show();
		$(this).find(block2).show();
		$(this).find(block1).hide();
	});
}
//common tab
function tabelTab(el,ulClass,bind){
	(!bind)? bind = 'mouseenter' : bind = 'click';
	$(el + ' .nav ul'+ ulClass +' > li').on(bind,function(){
		$(el + ' .nav ul > li').removeClass('select');
		var current = $(this).attr('class');
		current = parseInt(current.replace('nav-',''));
		if(!Number(current)) return false;
		$(this).addClass('select');
		$(el + ' .tab-content > div').addClass('hide');
		$(el + ' .tab-content .content-' + current).removeClass('hide');
	});
}
//common show info
function showInfo(el,title,discription){
	$(el + ' ul li').mouseenter(
		function(){
			$(el + ' ul li ' + discription).hide();
			$(el + ' ul li ' + title).show();
			$(this).find(title).hide();
			$(this).find(discription).show();
		}
	);
}
//common font zoom
function fontZoom(less,more,objElement){
	var current = 0;
	$(less).click(function(){
		switch(current){
			case 1:
				current--;
				$(objElement).removeClass('f16').addClass('f14');
				$(more).css('background-position','-18px 0');
				$(less).css('background-position','0 0');
				break;
			case 2:
				current--;
				$(objElement).removeClass('f18').addClass('f16');
				$(more).css('background-position','-18px 0');
				break;
		}
	});
	$(more).click(function(){
		switch(current){
			case 0:
				current++;
				$(objElement).removeClass('f14').addClass('f16');
				$(less).css('background-position','0 -12px');
				break;
			case 1:
				current++;
				$(objElement).removeClass('f16').addClass('f18');
				$(more).css('background-position','-18px -12px');
				break;
		}
	});
}
//common marquee
function marquee(leftArrow,rightArrow,moveContent,margin){
	var allNum = $(moveContent).find('li').length;
	var objWidth = $(moveContent).find('li').width();
	if(!margin) margin = 0;
	objWidth = parseInt(objWidth) + margin;
	$(moveContent).css({'width':allNum*objWidth + 'px'});
	$(moveContent).css({'left':-objWidth + 'px'});
	$(leftArrow).click(function(){
		$(moveContent).animate(
			{'left':'-=' + objWidth + 'px'},
			function(){
				$(moveContent).find('li').eq(0).appendTo($(moveContent));
				$(moveContent).css({'left':-objWidth + 'px'});
			}
		);
	});
	$(rightArrow).click(function(){
		$(moveContent).prepend($(moveContent).find('li').eq(-1));
		$(moveContent).animate({'left':'+=' + objWidth + 'px'},function(){$(moveContent).css({'left':-objWidth + 'px'});});
	});
}
//common select
function commSelect(obj,innerpd){
	if(!innerpd) innerpd = 0;
	$(obj).hover(
		function(){
			var w = innerpd+parseInt($(this).width());
			var $this = $(this);
			$(this).find('.select').show();
			$(this).find('.select').css('width',w + 'px');
			$(this).find('li:last').css({'border':'0'});
			$(this).find('li').click(function(){
				var text = $(this).html();
				$this.find('span').html(text);
				$this.find('.select').hide();
			});
		},
		function(){
			$(this).find('.select').hide();
		}
	);
}
//common arrow slideshow
function arrSlide(el){
	//$(el).find('.l-arrow').hide();
	var num = $(el).find('.slide-img ul li').length;
	var imgW = $(el).find('.slide-img ul li').width();
	var move = $(el).find('.slide-img');
	$(el).find('.slide-img').css('width',num*imgW + 'px');	
	var _page = '';
	for(var i=1;i<(num+1);i++){
		_page += '<li>'+i+'</li>'
		var pageNum = '<div class="num-page"><ul>'+_page+'</ul></div>';
	};
	$(el).append(pageNum);
	$(el).find('.num-page li').bind('click',function(){
		$(el).find('.l-arrow').show();
		$(el).find('.r-arrow').show();
	});
	$(el).find('.num-page li:first').bind('click',function(){
		$(el).find('.l-arrow').show();
		$(el).find('.r-arrow').show();
	});
	$(el).find('.num-page li:last').bind('click',function(){
		$(el).find('.l-arrow').show();
		$(el).find('.r-arrow').show();
	});
	var numObj = $(el).find('.num-page ul li');
	numObj.eq(0).addClass('select');
	numObj.click(function(){
		numObj.removeClass('select');
		$(this).addClass('select');
		var _current = parseInt($(this).html());
		if(!Number(_current)) return false;
		current(_current)
	});
	$(el).find('.l-arrow').click(function(){
		var lcurrent = $(el).find('.select').html();
		_num = parseInt(lcurrent);
		if(_num > 1){
			current(_num-1);
			$(el).find('.select').removeClass('select');
			$(el).find('.num-page ul li').eq(lcurrent-2).addClass('select');
			$(el).find('.r-arrow').show();
		}
		if(_num == 1){
			current(5);
			$(el).find('.select').removeClass('select');
			$(el).find('.num-page ul li').eq(4).addClass('select');
			$(el).find('.r-arrow').show();
		}
		console.info(lcurrent-2);
	});
	$(el).find('.r-arrow').click(function(){
		var rcurrent = $(el).find('.select').html();
		_num = parseInt(rcurrent);
		if(_num < num){
			current(_num+1);
			$(el).find('.select').removeClass('select');
			$(el).find('.num-page ul li').eq(rcurrent).addClass('select');
			$(el).find('.l-arrow').show();
		}
		if(_num == 5){
			current(1);
			$(el).find('.select').removeClass('select');
			$(el).find('.num-page ul li').eq(0).addClass('select');
			$(el).find('.r-arrow').show();
		}
	});
	function time(){
		var rcurrent = $(el).find('.select').html();
		_num = parseInt(rcurrent);
		currentNum = $(el).find('.select').html();
		if(currentNum == num){
			move.animate({left:'0px'},500);
			numObj.removeClass('select');
			numObj.eq(0).addClass('select');
		}
		else{
			move.animate({left:-(currentNum*imgW)+'px'},500);
			numObj.removeClass('select');
			numObj.eq(currentNum).addClass('select');
		}
		if(_num == (num-1)){
			$(el).find('.r-arrow').hide();
		}
		else if(_num == num){
			$(el).find('.l-arrow').hide();
			$(el).find('.r-arrow').show();
		}
		else {
			$(el).find('.l-arrow').show();
			$(el).find('.r-arrow').show();
		}
	}
	var timer = null;
	startTime();
	function startTime(){
		timer = setInterval(time,5000);
	}
	function stopTime(){
		if(timer) clearInterval(timer);
	}
	$(el).hover(
		function(){stopTime();},
		function(){startTime();}
	);
	function current(current){
		if(current == 1){move.animate({left:'0px'},0);}
		else{move.animate({left:-((current-1)*imgW)+'px'},0);}
	}
}
//common simple slideshow
function simpleSlidedshow(el,leftArrow,rightArrow,moveContent,margin,showsNum,liWidth){
	var leftA = $(el).find(leftArrow);
	var rightA = $(el).find(rightArrow);
	var moveC = $(el).find(moveContent);
	var num = $(el).find('li').length;
	var w;
	(liWidth)? w = liWidth : w = moveC.find('li').width();
	moveC.css('width',(w+margin)*num + 'px');
	var current;
	var nowPage = 0;
	if(num > 4){
		rightA.css({'background-color':'#000'});
		nowPage = 1;
	}
	else{
		rightA.css('background','#ddd');
		leftA.css('background','#ddd');
	}
	leftA.click(function(){
		(nowPage == 2)?leftA.css('background','#ddd'):'';
		current = moveC.css('left');
		current = parseInt(current)*-1;
		if(!nowPage == 0){
			rightA.css({'background-color':'#000'});
			if(nowPage > 1 && current > showsNum*(w+margin)){
				moveC.animate({left: '+=' + showsNum*(w+margin) + 'px'});
				nowPage--;
			}
			else{
				moveC.animate({left: '0px'});
				nowPage = 1;
			}
		}
	});
	rightA.click(function(){
		(nowPage == parseInt(num/showsNum))?rightA.css('background','#ddd'):'';
		if(nowPage >= 1 && num*(w+margin) > showsNum*(w+margin)){
			leftA.css('background','#000');
			if(nowPage == parseInt(num/showsNum)){
				moveC.animate({left: '-=' + (num%showsNum)*(w+margin) + 'px'});
				nowPage++;
			}
			else if(nowPage < parseInt(num/showsNum)){
				moveC.animate({left: '-=' + showsNum*(w+margin) + 'px'});
				nowPage++;
			}
		}
	});
}
//date choose
function _setDate(date){
	var month;
	var value;
	var $year;
	var $month;
	var $day;
	if(date){
		var format = date.split('-');
		$year = format[0];
		$month = format[1];
		$day = format[2];
	}
	dateYear($year);
	dateMonth($month);
	dateDay($day);
	$('#year').change(function(){
		dateMonth($month);
		dateDay($day);
	});
	$('#month').change(function(){
		dateDay($day);
	});
}
function dateYear($year){
	var html = '';
	var myDate = new Date();
	var year = myDate.getFullYear();
	for(var i = year; i>=1970; i--){
		html += '<option>'+ i +'</option>';
	}
	$('#year').html(html);
	$('#year').prepend('<option>选择</option>');
	if($year) currentTime('#year',$year);
}
function dateMonth($month){
	var html = '';
	value = parseInt($('#year').val());
	if(isNaN(value)){
		$('#month').attr('disabled',true);
	}
	else{
		$('#month').attr('disabled',false);
		for(var i = 1; i < 13; i++){
			html += '<option>'+ i +'</option>'
		}
		$('#month').html(html);
		$('#month').prepend('<option>选择</option>');
	}
	if($month) currentTime('#month',$month);
}
function dateDay($day){
	var html = '';
	value = parseInt($('#month').val());
	var _year = parseInt($('#year').val());
	a(32);
	if(isNaN(value) || isNaN(_year)){
		$('#date').attr('disabled',true);
	}
	else{
		$('#date').attr('disabled',false);
		if(value%2 == 1 && value < 8){
			a(32);
		}
		else if(value == 2){
			(_year%4 == 0)? a(30) : a(29);
		}
		else if(value%2 == 0 && value < 7){
			a(31);
		}
		else if(value%2 == 1 && value > 8){
			a(31);
		}
		else if(value%2 == 0 && value > 8){
			a(32);
		}
	}
	function a(num){
		for(var i = 1; i < num; i++){
			html += '<option>'+ i +'</option>'
		}
		$('#date').html(html);
		$('#date').prepend('<option>选择</option>');
	}
	if($day) currentTime('#date',$day);
}
function currentTime(time,kind){
	$(time + ' option').each(function(){
		if($(this).html() == kind){
			$(this).attr('selected','selected');
		}
	});
}
//select all input
function selectAllInput(el,allSelectInput){
	$(el).find(allSelectInput).click(function(){
		($(this).attr('checked') == 'checked')?$(el).find('input:checkbox').attr('checked',true):$(el).find('input:checkbox').attr('checked',false);
	});
}

//horizontal scroll structure HTML div(relative)/ul(absolute)/li
function horizontalScroll(el,movingRange){
	function time(){
		var obj = $(el + ' ul');
		obj.animate(
			{'top': '-' + movingRange + 'px'},
			function(){
				(obj.find('li:eq(0)')).appendTo(obj);
				obj.css('top','0');
			}
		);

	};
	setInterval(time,3000);
}
//common time convert time stamp || time format ex:2013-10-10 10:20:10
function transdate(endTime){
	var date = new Date();
	date.setFullYear(endTime.substring(0,4));
	date.setMonth(endTime.substring(5,7)-1);
	date.setDate(endTime.substring(8,10));
	date.setHours(endTime.substring(11,13));
	date.setMinutes(endTime.substring(14,16));
	date.setSeconds(endTime.substring(17,19));
	return Date.parse(date)/1000;
}
//return count down time and append to html
//kind 1=>stamp 2=>date form
function countDown(beginTime,endTime,el,kind){
	if(!beginTime || !endTime) return false;
	if(kind == 2){
		var timestamp_fir = transdate(beginTime);
		var timestamp_sec = transdate(endTime);
	}
	else{
		var timestamp_fir = beginTime;
		var timestamp_sec = endTime;
	}
	var activity = parseInt(timestamp_sec) - parseInt(timestamp_fir);
	var day = parseInt(activity/60/60/24);
	var hour = parseInt(activity/60/60);
	var minutes = parseInt(activity/60) - parseInt((hour*60));
	var second = activity - hour*60*60 - minutes*60;
	var html = '';
	function _cdTime(){
		var m;
		var s;
		if(second == 0){
			second = 59;
			minutes--;
		}
		else{
			second--;

		}
		if(minutes < 0){
			minutes = 59;
			hour--;
		}
		if(hour < 0){
			//$(el).html('<span class="f14 red bg-eee">活动已经结束!</span>');
			clearInterval(t);
			return false;
		}
		if(minutes < 10){
			m = '0' + minutes;
		}
		else{
			m = minutes;
		}
		if(second < 10){
			s = '0' + second;
		}
		else{
			s = second;
		}
		html = '<span>'+hour+'</span>\
				时\
				<span>'+m+'</span>\
				分\
				<span>'+s+'</span>\
				秒';
		$(el).html(html);
	}
	var t = setInterval(_cdTime,1000);
}
//common magnifying
function magnifying(el,innerEl,topMargin){
	var objW = $(el).width();
	var objH = $(el).height();
	$(el).bind('mouseenter',function(){
		var src = $(this).find('img').attr('src');
		var defaulImg = $(this).find('img');
		defaulImg.css({'width':'auto','height':'auto'});
		_w = defaulImg.width();
		_h = defaulImg.height();
		defaulImg.css({'width': objW + 'px','height': objH + 'px'});
		var multiplyX = _w/objW;
		var multiplyY = _h/objH;
		var html = '<div class="maninfying-con" style="position:absolute; left:'+objW+'px; top:-'+topMargin+'px; display:none; background:#fff;">\
						<p style="width:'+objW+'px; height:'+objH+'px; background:url('+src+') no-repeat;"></p>\
					</div>';
		var mouseBlock = '<span class="mouseBlock transparent" style="width:'+objW/multiplyX+'px; height:'+objH/multiplyY+'px; position:absolute; left:0; top:0; border:0; padding:0; display:none;"></span>';
		$(this).append(html);
		$(this).find(innerEl).append(mouseBlock);
		$(this).bind('mousemove',function(e){
			$('.maninfying-con').show();
			$('.mouseBlock').show();
			var moveX = e.pageX;
			var moveY = e.pageY;
			var offset = $(this).offset();
			var offsetX = offset.left;
			var offsetY = offset.top;
			moveX = parseInt(moveX - offsetX)*-1;
			moveY = parseInt(moveY - offsetY)*-1;
			$('.maninfying-con p').css({'background-position':''+((moveX+objW/multiplyX/2)*multiplyX)+'px '+((moveY+objH/multiplyY/2)*multiplyY)+'px'});
			$('.mouseBlock').css({'left':(moveX+objW/multiplyX/2)*-1 + 'px','top':(moveY+objH/multiplyY/2)*-1 + 'px'});
			var _left = $('.mouseBlock').css('left');
			var _top = $('.mouseBlock').css('top');
			if(parseInt(_left) < topMargin){
				$('.mouseBlock').css('left',topMargin + 'px');
				$('.maninfying-con p').css('background-position-x',topMargin + 'px');
			}
			if(parseInt(_top) < topMargin){
				$('.mouseBlock').css('top',topMargin + 'px');
				$('.maninfying-con p').css('background-position-y',topMargin + 'px');
			}
			if(parseInt(_left) > (objW - objW/multiplyX)){
				$('.mouseBlock').css('left',objW - objW/multiplyX + 'px');
				$('.maninfying-con p').css('background-position-x','-' + (_w-objW) + 'px');
			}
			if(parseInt(_top) > (objH - objH/multiplyY)){
				$('.mouseBlock').css('top',objH - objH/multiplyY + 'px');
				$('.maninfying-con p').css('background-position-y','-' + (_h-objH) + 'px');
			}
			if(moveX <= objW*-1 || moveY <= objH*-1){
				$('#mouseBlock').hide();
				$('.maninfying-con').hide();
			};
		});
	});
	$(el).bind('mouseleave',function(){
		$('.mouseBlock').remove();
		$('.maninfying-con').remove();
	});
}
//number convert chinese characters
function convertCharacters(n) {
	if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) return "数据非法";
	var unit = "千百拾亿千百拾万千百拾元角分", str = "";
	n += "00";
	var p = n.indexOf('.');
	if (p >= 0) n = n.substring(0, p) + n.substr(p+1, 2);  
	unit = unit.substr(unit.length - n.length);
	for (var i=0; i < n.length; i++)
	str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i);
	return str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "");  
} 
// delete blank
function del_b(str){
	var str = str.replace(/<\/?[^>]*>/gim,"");
    var result = str.replace(/(^\s+)|(\s+$)/g,"");
    return  result.replace(/\s/g,"");
}
// prompt window
function promptWindow(el,promptObj){
	$(el).bind('click',function(){
		$('#masker').fadeIn();
		$(promptObj).fadeIn();
	});
	$(promptObj).find('.close').click(function(){
		$('#masker').fadeOut();
		$(promptObj).fadeOut();
	});
	$('#masker').bind('click',function(){
		$(this).fadeOut();
		$(promptObj).fadeOut();
	});
}
//reveal
function reveal(el,c1,c2,num1,num2,text1,text2){
	$(el).find(c1).click(function(){
		var a = $(el).find(c2);
		if(!a.hasClass('down')){
			a.animate({'height':num2 + 'px'}).addClass('down');
			$(c1).text(text2);
		}
		else{
			a.animate({'height':num1 + 'px'}).removeClass('down');
			$(c1).text(text1);
		}
	});
}
//twin arrow slide show
$(function(){
	$.fn.twinSlide = function(options){
		var defaults = {
			topImgWidth : 550,
			topImgHeight : 430,
			bottomImgWidth : 50,
			bottomImgHeight : 66,
			bottomImgMargin : 16,
			topLeftArrow : '.t-l-arrow',
			topRightArrow : '.t-r-arrow',
			topMoveContent : '.t-m-content',
			bottomLeftArrow : '.b-t-arrow',
			bottomRightArrow : '.b-r-arrow',
			bottomMoveContent : '.b-m-content',
			topSku : 't',
			bottomSku : 'b',
			oneScreenNum : 9
		}
		var options = $.extend(defaults,options);
		var num = $(options.bottomMoveContent + ' li').length;
		var current;
		var moveRange = options.oneScreenNum*(options.bottomImgMargin+options.bottomImgWidth);
		var obj = $(options.bottomMoveContent);
		_moveContentWidth = num*options.bottomImgMargin + num*options.bottomImgWidth;
		(num > options.oneScreenNum)? $(options.bottomRightArrow).css('background','#333') : '';
		$(options.bottomMoveContent).css('width',_moveContentWidth + 'px');
		$(options.bottomMoveContent + ' li').bind('click',function(){
			$(options.bottomMoveContent + ' li').removeClass('select');
			$(this).addClass('select');
			var _currentNum = $(this).attr('class');
			_currentNum = _currentNum.replace(/[^\d]/g,'');
			$(options.topMoveContent + ' li').fadeOut();
			$(options.topMoveContent + ' li.' + options.topSku + _currentNum).fadeIn('slow');
		});
		$(options.bottomRightArrow).bind('click',function(){			
			current = obj.css('left');
			current = parseInt(current);
			if(current == 0 && num > options.oneScreenNum){
				obj.animate({
					left : '-=' + moveRange + 'px'
				});
				$(this).css('background','#999');
				$(options.bottomLeftArrow).css('background','#333');
			}
		});
		$(options.bottomLeftArrow).bind('click',function(){
			current = obj.css('left');
			current = parseInt(current);
			if(current < 0){
				obj.animate({
					left : '0px'
				});
				$(this).css('background','#999');
				$(options.bottomRightArrow).css('background','#333');
			}
		});
		$(options.topLeftArrow).bind('click',function(){
			var _current = $(options.bottomMoveContent + ' li.select').attr('class');
			_current = parseInt(_current.replace(/[^\d]/g,''));
			if(_current != 1){
				$(options.topMoveContent + ' li').fadeOut();
				$(options.topMoveContent + ' li.' + options.topSku + (_current-1)).fadeIn('slow');
				$(options.bottomMoveContent + ' li').removeClass('select');
				$(options.bottomMoveContent + ' li.' + options.bottomSku + (_current-1)).addClass('select');
			}
		});
		$(options.topRightArrow).bind('click',function(){
			var _current = $(options.bottomMoveContent + ' li.select').attr('class');
			_current = parseInt(_current.replace(/[^\d]/g,''));
			if(_current < num){
				$(options.topMoveContent + ' li').fadeOut();
				$(options.bottomMoveContent + ' li').removeClass('select');
				$(options.topMoveContent + ' li.' + options.topSku + (_current+1)).fadeIn();
				$(options.bottomMoveContent + ' li.' + options.bottomSku + (_current+1)).addClass('select');
			}
		});
	}
});
//top bottom silde
(function($){
	$.fn.t_bSlide = function(options){
		var defaults = {
			moveRangeHeight : 232,
			container : '.block'
		}
		var options = $.extend(defaults,options);
		var upArrow = $(options.container).find('.connect span:last');
		var downArrow = $(options.container).find('.connect span:first');
		var moveArea = $(options.container).find('.move-content');	
		var current;
		upArrow.bind('click',function(){
			current = parseInt(moveArea.css('top'));
			$(options.container).find('span').removeClass('select');
			$(this).addClass('select');
			if(current != 0){
				moveArea.animate({
					'top' : '0px'
				});
			}
		});
		downArrow.bind('click',function(){
			current = parseInt(moveArea.css('top'));
			$(options.container).find('span').removeClass('select');
			$(this).addClass('select');
			if(current == 0){
				moveArea.animate({
					'top' : '-' + options.moveRangeHeight + 'px'
				});
			}
		});
	}
})(jQuery);
//suit images size
function imageSuit(el,maxWidth,maxHeight){
	var objWidth = el.width();
	var objHeight = el.height();
	if(objWidth > maxWidth){
		el.css('width',maxWidth+'px');
		if(objHeight > maxHeight){
			el.css('height',maxHeight+'px');
		}
	}
	else{
		el.css('height',maxHeight+'px');
	}
}

























































