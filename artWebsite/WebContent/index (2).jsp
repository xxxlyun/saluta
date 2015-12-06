<%@ page contentType="text/html; charset=utf-8" language="java" import="java.sql.*" errorPage="" %>
<%@ taglib prefx="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="">
<meta name="author" content="">
<title>
Saluta
</title>

<!-- Bootstrap Core CSS -->
<link rel="stylesheet" href="css/bootstrap.min.css"  type="text/css">

<!-- Custom CSS -->
<link rel="stylesheet" href="css/style.css">

<!-- Custom Fonts -->
<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css"  type="text/css">
<link rel="stylesheet" href="fonts/font-slider.css" type="text/css">

<!-- jQuery and Modernizr-->
<script src="js/jquery-2.1.1.js"></script>

<!-- Core JavaScript Files -->
<script src="js/bootstrap.min.js"></script>

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
    <![endif]-->
<script>
$(function(){
	var _scroll_h_today=$("#today").offset().top;
	var _scroll_h_tomorrow=$("#tomorrow").offset().top;
	var _scroll_h_soon=$("#soon").offset().top;
	
	$("#flt").animate({
		right:"0px"
	},700)
	
	$("#flt .tag a").click(function(){
		var _id=$(this).data("id");
		$("html, body").animate({
			scrollTop : $("#"+_id).offset().top
		},400)
	});
	$("#flt .gn a,#flt .qm a").hover(function(){
		$(this).children("span.aw").animate({
			left:"-100px",
			opacity:"show"
		},400)
	},function(){
		$(this).children("span.aw").animate({
			left:"-150px",
			opacity:"hide"
		},400)
	});
	$("#gotop").click(function(){
		var _id=$(this).data("id");
		$("html, body").animate({
			scrollTop : 0
		},400)
	});
	$("#adsnav").slide({
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"fold",
		interTime:3500,
		delayTime:375,
		autoPlay:true,
		autoPage:true, 
		trigger:"click",
		startFun:function(i,c){
			$("#adsnav .hd").css("margin-left",-(c*15)+"px");
		}
	});
	$("#uldiv").slide({
		titCell:".hd ul",
		mainCell:".bd .ulWrap",
		effect:"leftLoop",
		interTime:3500,
		delayTime:375,
		autoPlay:true,
		autoPage:true
	});

	$("#qmenu li").hover(function(){
		//$(this).children(".sqm").css("top",-35*($(this).index())+"px").fadeIn("fast");
		$(this).children(".sqm").css("top",-35*($(this).index())+"px").animate({
			opacity: 'show',
			right: '-110px'
		},400);
	},function(){
		//$(this).children(".sqm").fadeOut("fast");
		$(this).children(".sqm").css("top",-35*($(this).index())+"px").animate({
			opacity: 'hide',
			right: '-110px'
		},400);
	})
	$("#ulpm_today li").each(function(index, element) {
        var _leavetime=$(this).data("leavetime");
        var _id=$(this).data("id");
		cutdown("#pm_"+_id+" h5 span",_leavetime);
		//alert(_leavetime);
		//return false;
    });
})

//倒计时传入类,和时间戳
function cutdown(id,timeree){
	var intDiff = parseInt(timeree);//倒计时总秒数量
	timer(id,intDiff);
}

function timer(lei,intDiff){
	var secondpercent = secondpercent;
	intDiff=parseInt(intDiff);
	window.setInterval(function(){
		if(intDiff<=0){
			var str="拍卖已结束";

			$(lei).html(str);
			/*商品终端页 开始(时间结束)*/
				//$("#j_start").fadeOut("slow");
				//$("#j_start").fadeOut("slow");
				$("#j_goods_detail_wenzi_starting").fadeOut("slow");
				$("#j_goods_detail_wenzi_ended").fadeIn("slow");

			/*商品终端页 结束*/

			/*首页正在进行到期自动隐start*/

			/*首页正在进行到期自动隐end*/

			return false;
		}
	//下面的是时间默认值
	var day=0,
		hour=0,
		minute=0,
		second=0;
	if(intDiff > 0){
			day = Math.floor(intDiff / (60 * 60 * 24));
			hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
			minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
			second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
	}
	if (minute <= 9) minute = '0' + minute;
	if (second <= 9) second = '0' + second;
	var str=day+"天"+hour+'时'+minute+'分'+second+'秒';
	$(lei).text(str);
	intDiff--;
	}, 1000);
}
</script>
</head>

<body>
<!--Top-->
<nav id="top">
  <div class="container">
    <div class="row">
      <div class="col-xs-6">
       </div>
      <div class="col-xs-6111">
        <ul class="top-link">
        <li><a href="login.jsp"><span class="glyphicon glyphicon-user"></span> 登录 </a></li>
        <li><a href="userregister.jsp"><span class="glyphicon glyphicon-user"></span> 注册 </a></li>
          <li><a href="account.jsp"><span class="glyphicon glyphicon-user"></span> 个人中心 </a></li>
          <li><a href="contact.jsp"><span class="glyphicon glyphicon-envelope"></span> 留言</a></li>
          
        </ul>
      </div>
    </div>
  </div>
</nav>
<!--Header-->
<header class="container">
  <div class="row">
    <div class="col-md-4"> </div>
    <div class="col-md-4" >
      <form class="form-search">
        <input type="text" class="input-medium search-query">
        <button type="submit" class="btn">
        <span class="glyphicon glyphicon-search"></span>
        </button>
        <a class="btn btn-1" href="cart.jsp"><span class="glyphicon glyphicon-shopping-cart"></span></a>
      </form>
    </div>
  </div>
</header>
<!--Navigation-->
<nav id="menu" class="navbar">
  <div class="container">
    <div class="navbar-header"><span id="heading" class="visible-xs">Saluta</span>
      <button type="button" class="btn btn-navbar navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"><i class="fa fa-bars"></i></button>
    </div>
    <div class="collapse navbar-collapse navbar-ex1-collapse">
      <ul class="nav navbar-nav">
        <li><a href="index.html">主页</a></li>
        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">定制中心</a>
          <div class="dropdown-menu">
            <div class="dropdown-inner">
              <ul class="list-unstyled">
                <li><a href="category.html">艺术品定制</a></li>
                <li><a href="category.html">定制品展示</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">艺术品拍卖 </a> </li>
        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">在线商城</a>
          <div class="dropdown-menu" style="margin-left: -203.625px;">
            <div class="dropdown-inner">
              <ul class="list-unstyled">
                <li><a href="category.html">油画作品</a></li>
                <li><a href="category.html">国画作品</a></li>
                <li><a href="category.html">书法作品</a></li>
                <li><a href="category.html">室内壁画</a></li>
              </ul>
              <ul class="list-unstyled">
                <li><a href="category.html">人物油画</a></li>
                <li><a href="category.html">人物肖像</a></li>
                <li><a href="category.html">室内装饰</a></li>
                <li><a href="category.html">博物馆壁画</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li><a href="category.html">联系我们</a></li>
      </ul>
    </div>
  </div>
</nav>
<!--//////////////////////////////////////////////////--> 
<!--///////////////////HomePage///////////////////////--> 
<!--//////////////////////////////////////////////////-->
<div id="page-content" class="home-page">
<div class="container">
<div class="row">
  <div class="col-lg-12"> 
    <!-- Carousel -->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel"> 
      <!-- Indicators -->
      <ol class="carousel-indicators hidden-xs">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <div class="item active">
          <p>&nbsp;</p>
          <p> 
            <!-- Static Header --> 
            <img src="images/yh3.jpg" alt="First slide"></p>
          <div class="header-text hidden-xs">
            <div class="col-md-12 text-center"> </div>
          </div>
          <!-- /header-text --> 
        </div>
        <div class="item"> <img src="images/yh2.jpg" alt="Second slide"> 
          <!-- Static Header -->
          <div class="header-text hidden-xs">
            <div class="col-md-12 text-center"> </div>
          </div>
          <!-- /header-text --> 
        </div>
        <div class="item"> <img src="images/yh1.jpg" alt="Third slide"> 
          <!-- Static Header -->
          <div class="header-text hidden-xs">
            <div class="col-md-12 text-center"> </div>
          </div>
          <!-- /header-text --> 
        </div>
      </div>
      <!-- Controls --> 
      <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a> <a class="right carousel-control" href="#carousel-example-generic" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a> </div>
    <!-- /carousel --> 
  </div>
</div>
<div class="row">
  <div class="col-lg-12">
    <div class="heading">
      <h2>拍卖专场</h2>
       每日22:00结拍
       </div> 
       <div style=" display:inline-block; float:left; border-style:dotted; border-color:#CCC; padding:15px; border-width:thin" >
       <div class="xxg-gdzc"  >
				 <div class="xxg-gdzc-img"><a href="/paimai/gaoduan-1"><img alt="高端艺术品竞拍专场" src="images/back.jpg" class="img2"/></a></div>
				 <div class="xxg-gdzc-right" >
					 <div class="xxg-gdzc-text" margin:0 auto ><a   href="/paimai/gaoduan-1"><b>高端艺术品竞拍专场</b></a></div>
					 <div class="xxg-gdzc-textright">
						 <ul>
							 <li class="pp"><span><b>36</b></span>件拍品</li>
						 </ul>
					 </div>
				 </div>
				 <div class="xxg-bg"></div>
			 </div>
         </div>
    </div>
    </div>
    
  <div class="row">
  <div class="col-lg-12">
    <div class="heading">
      <h2>精品展示</h2>
    </div>  
    <div class="products">
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <div class="product">
          <div class="image">
          <a href="product.html"><img src="images/dzp1.jpg" class="img1" /></a>
          </div>
          <div class="buttons"> <a class="btn cart" href="#">
      <span class="glyphicon glyphicon-shopping-cart"></span></a> <a class="btn wishlist" href="#">
      <span class="glyphicon glyphicon-heart"></span></a> 
 </div>
          <div class="caption">
          <div class="name">
          <h3><a href="product.html">撕开的墙200x300</a></h3>
            </div>
          </div>
        </div>
      </div>
   
      
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <div class="product">
          <div class="image">
          
          <a href="product.html"><img src="images/dzp2.jpg" class="img1" /></a>
      
          </div>
          <div class="buttons"> <a class="btn cart" href="#"><span class="glyphicon glyphicon-shopping-cart"></span></a> 
          <a class="btn wishlist" href="#"><span class="glyphicon glyphicon-heart"></span></a> 
           </div>
          <div class="caption">
            <div class="name">
              <h3><a href="product.html">《灾难来临的时候》</a></h3>
            </div>
            
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <div class="product">
          <div class="image"><a href="product.html"><img src="images/dzp7.jpg" class="img1" /></a></div>
          <div class="buttons"> <a class="btn cart" href="#"><span class="glyphicon glyphicon-shopping-cart"></span></a> <a class="btn wishlist" href="#"><span class="glyphicon glyphicon-heart"></span></a>  </div>
          <div class="caption">
            <div class="name">
              <h3><a href="product.html">天路（畅想西游）</a></h3>
            </div>
            
        
          </div>
        </div>
      </div>
     
      
     
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <div class="product">
          <div class="image"><a href="product.html"><img src="images/dzp4.jpg" class="img1" /></a></div>
          <div class="buttons"> <a class="btn cart" href="#"><span class="glyphicon glyphicon-shopping-cart"></span></a> <a class="btn wishlist" href="#"><span class="glyphicon glyphicon-heart"></span></a>  </div>
          <div class="caption">
            <div class="name">
              <h3><a href="product.html">北方--180X140-1989年</a></h3>
            </div>
           
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<footer>
		<div class="container">
			<div class="wrap-footer" >
				<div class="row">
					<div class="col-md-3 col-footer footer-2">
						<div class="heading"><h4>新手指南</h4></div>
						<ul>
							<li><a href="#">购物流程</a></li>
							<li><a href="#">订单查询</a></li>
						</ul>
					</div>
					<div class="col-md-3 col-footer footer-3">
						<div class="heading"><h4>支付方式</h4></div>
						<ul>
							<li><a href="#">支付问题</a></li>
							<li><a href="#">退款问题</a></li>
						</ul>
					</div>
					<div class="col-md-3 col-footer footer-4">
						<div class="heading"><h4>联系我们</h4></div>
						<ul>
							<li><span class="glyphicon glyphicon-earphone"></span>+0592 2973658</li>
							<li><span class="glyphicon glyphicon-envelope"></span>saluta@163.com</li>
						</ul>
					</div>
				</div>
		</div>
		<div class="copyright">
			<div class="container">
				<div class="row">
					<div class="col-md-6" align="center">
						Copyright &copy; 2015.Saluta All rights reserved.
					</div>
				</div>
                </div>
			</div>
		</div>
	</footer>
</body>
</html>