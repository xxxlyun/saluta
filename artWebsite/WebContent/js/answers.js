// JavaScript Document
$(document).ready(function(){


/*
	setTimeout(function(){

	    $('.xgbanner_2').show();
		$('.xgbanner_1').slideUp();

	},4000);


	$('.xgbanner_1 a').click(function(){
		$('.xgbanner_2').show();
		$('.xgbanner_1').slideUp();
		});




	$('.xgbanner_2 a').click(function(){
		$('.xgbanner_1').slideDown();
		$('.xgbanner_2').hide();
		});

*/

	$('.xgbanner_1').hide();
	$('.xgbanner_2').show();
	$('.xgbanner_1 a').click(function(){
		$('.xgbanner_2').show();
		$('.xgbanner_1').slideUp();
		});	

	$('.xgbanner_2 a').click(function(){
		$('.xgbanner_1').slideDown();
		$('.xgbanner_2').hide();
		});


    $(".jrxxr_3_con dl").hover(function(){
		$(this).addClass("hover").siblings().removeClass();
		});

	$(".jrlb1 li span").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		});
	$(".menu .div1_0 .txt").hide();
	var timer1 = null;

	$(".menu .div1_0 a").hover(function(){
		$(".menu .div1_0 .txt").show();
		},function(){
			timer1 = setTimeout(function(){
				$(".menu .div1_0 .txt").hide();
				},2000)
			//$(".menu .txt").hide();
			});
	$(".menu .div1_0 .txt").hover(function(){
		clearTimeout(timer1);
		},function(){
			$(".menu .div1_0 .txt").hide();
			})



$('#graybg').height($(window).height());
$('#jp_pmjs .youhuiquan').each(function(index, element) {
    $(this).click(function(){
	    $('#graybg').fadeIn();
		$(this).siblings('.youhui').slideDown();
		return false;
	});
});
$('#graybg').click(function(){
    $(this).fadeOut()
	$('.youhui').slideUp();
})


							 $('#yc').hide();
							 $('.xtj-timedelay a').click(function(){
								 $('#yc').show();

								 });
							$('.xgbanner_2').click(function(){
								$('#yc').show();
							})

							$('.xtj-timedelay-tstop a').click(function(){
								$('#yc').hide();
								});


                            $('#yc0').hide();
							 $('#xtj-timedelay0 a').click(function(){
								 $('#yc0').show();

								 });

							$('.xtj-timedelay-tstop a').click(function(){
								$('#yc0').hide();
								});







});





