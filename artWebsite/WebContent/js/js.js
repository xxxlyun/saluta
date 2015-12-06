$(document).ready(function(){
	$.Placeholder.init();
	$('.location').hover(
		function(){
			$('#nav-local').show();
		},
		function(){
			$('#nav-local').hide();
			var text = $('.local-city b').text();
			$('.location .now-city').html(text + '站');
		}
	);
});

//avatar preview
(function($) {
    $.fn.PreviewImage = function(options) {
        var Default = {
            ImageClientId: "",
            MaxWidth: 300,
            MaxHeight: 300,
            OtherImg: ""
        };
        $.extend(true, Default, options);
        return this.each(function() {
            if (Default.ImageClientId != "") {
                $(this).unbind("change");
                $(this).change(function() {
                    if ($(this).val() == "") {
                        $("#" + Default.ImageClientId).parent("div").hide();
                        return;
                    }
                    else {
                        $("#" + Default.ImageClientId).parent("div").show();
                    }
                    if ($.browser.msie) {
                        $("#" + Default.ImageClientId).attr("src", $(this).val());
                        $(Default.OtherImg).attr("src", $(this).val());
                    }
                    else {
                        $("#" + Default.ImageClientId).attr("src", window.URL.createObjectURL($(this)[0].files[0]));
                        $(Default.OtherImg).attr("src", window.URL.createObjectURL($(this)[0].files[0]));
                    }
                    if ($.browser.msie && $.browser.version > 6) {
                        $("#" + Default.ImageClientId).hide();
                        $("#" + Default.ImageClientId).parent("div").css({ 'z-index': '999',
                            'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)',
                            'max-width': Default.MaxWidth + 'px', 'max-height': Default.MaxHeight + 'px',
                            'width': Default.MaxWidth + 'px', 'height': Default.MaxHeight + 'px'
                        });
                        var div = $("#" + Default.ImageClientId).parent("div")[0];
                        div.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = $("#" + Default.ImageClientId).attr("src");
                    }
                });
                $("#" + Default.ImageClientId).load(function() {
                    var image = new Image();
                    image.src = $(this).attr("src");
                    $(this).attr("width", Default.MaxWidth);
                    $(this).attr("height", Default.MaxHeight);
                    $(this).attr("alt", Default.MaxWidth + "x" + Default.MaxHeight);
                });
            }
        });
    };
})(jQuery);

//city choose => unselect
function _chooseCity(el){
	var chooseEN = $(el).find('.en-word ul li').text();
	var _Fshow = $(el).find('.local-city b');
	$(el).find('.num-rank ul li').click(function(){
		$(el).find('.city-list .content ul li').removeClass('select');
		var text = $(this).text();
		$(this).addClass('select');
		_Fshow.html(text);
	});
	$(el).find('.country ul li').click(function(){
		var text = $(this).text();
		_Fshow.html(text);
	});
	$(el).find('.en-word ul li').click(function(){
		var word = $(this).text();
		word = word.toLowerCase();
		var _current = $(el).find('.city-list .' + word).position();
		if(_current == null){
			alert('该字母中没有所包含的城市！');
			return false;
		}
		else{
			var _top = _current.top;
			$(el).find('.city-list').scrollTop(_top);
		}		
	});
	$(el).find('.search-city .btn').click(function(){
		$(el).find('.city-list .content div ul li').removeClass('select');
		var cityName = $(el).find('.search-city input').val();
		var allCity = $(el).find('.city-list .content div ul li').html();
		var judge = 0;
		$(el).find('.city-list .content div ul li').each(function(){
			var obj = $(this).text();
			if(del_b(obj) == del_b(cityName)){
				judge = 1;
				$(this).addClass('select');
				var _current = $(this).position();
				var _top = _current.top;
				$(el).find('.city-list').scrollTop(_top);
				_Fshow.html(obj);
			}	
		});
		if(judge == 0){
			alert('所查找的城市不存在');
		}
	});
}

// have words slideshow
function wordsSlideShow(el){
	var mainContainer = $(el);
	var doubleArr = '<span class="l-arr arr"><</span><span class="r-arr arr">></span>';
	mainContainer.append(doubleArr);
	var liNum = $(el).find('li').length;
	var current = 1;
	var totalObj = $(el).find('i.total');
	var currentObj = $(el).find('i.current');
	totalObj.text(liNum);
	currentObj.text(current);
	var leftArr = $(el).find('.l-arr');
	var rightArr = $(el).find('.r-arr');
	leftArr.live('click',function(){
		if(current == 1){
			alert('当前已是第一张图片！');
		}
		else{
			current --;
			currentObj.text(current);
			$(el).find('li').hide();
			$(el).find('li:eq('+(current-1)+')').fadeIn();
		}
	});
	rightArr.live('click',function(){
		if(current == liNum){
			alert('当前已是最后一张图片！');
		}
		else{
			current ++;
			currentObj.text(current);
			$(el).find('li').hide();
			$(el).find('li:eq('+(current-1)+')').fadeIn();
		}
	});
}