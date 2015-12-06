<%@ page contentType="text/html; charset=UTF-8" %> 
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="">
    <meta name="author" content="">
	
    <title>cart</title>
	
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
</head>
<body>
	<!--Top-->
	<nav id="top">
		<div class="container">
			<div class="row">
				<div class="col-xs-6">
				</div>
				<div class="col-xs-6">
					<ul class="top-link">
						<li><a href="account.html"><span class="glyphicon glyphicon-user"></span> 个人中心</a></li>
						<li><a href="contact.html"><span class="glyphicon glyphicon-envelope"></span> 留言</a></li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	<!--Header-->
	<header class="container">
		<div class="row">
			<div class="col-md-4">
				
			</div>
			<div class="col-md-4">
				<form class="form-search">
        <input type="text" class="input-medium search-query">
        <button type="submit" class="btn"><span class="glyphicon glyphicon-search"></span></button>
        <a class="btn btn-1" href="cart.jsp"><span class="glyphicon glyphicon-shopping-cart"></span></a>
      </form>
			</div>
			
		</div>
	</header>
	<!--Navigation-->
    <nav id="menu" class="navbar">
		<div class="container">
			<div class="navbar-header"><span id="heading" class="visible-xs">saluta</span>
			  <button type="button" class="btn btn-navbar navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"><i class="fa fa-bars"></i></button>
			</div>
			<div class="collapse navbar-collapse navbar-ex1-collapse">
				<ul class="nav navbar-nav">
					<li><a href="index.html">首页</a></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">定制中心</a>
						<div class="dropdown-menu">
							<div class="dropdown-inner">
								<ul class="list-unstyled">
									<li><a href="category.html">艺术品定制</a></li>
									<li><a href="category.html">定制品展示</a></li>
								</ul>
							</div>
						</div>
					</li>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">艺术品拍卖</a>
					</li>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">在线商城</a>
						<div class="dropdown-menu" style="margin-left: -203.625px;">
							<div class="dropdown-inner">
								<ul class="list-unstyled">
									<li><a href="category.html">风景油画</a></li>
									<li><a href="category.html">山水国画</a></li>
									<li><a href="category.html">室内壁画</a></li>
								</ul>
								<ul class="list-unstyled">
									<li><a href="category.html">人物油画</a></li>
									<li><a href="category.html">人物国画</a></li>
									<li><a href="category.html">人物雕刻</a></li>
								</ul>
								<ul class="list-unstyled">
									<li><a href="category.html">书法</a></li>
									<li><a href="category.html">玉器瓷器</a></li>
									<li><a href="category.html">青铜制品</a></li>
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
	<!--///////////////////Cart Page//////////////////////-->
	<!--//////////////////////////////////////////////////-->
	<div id="page-content" class="single-page">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<ul class="breadcrumb">
						<li><a href="index.html">首页</a></li>
						<li><a href="cart.html">购物车</a></li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="product well">
					<div class="col-md-3">
						<div class="image">
							<img src="images/dzp1.jpg" />
						</div>
					</div>
					<div class="col-md-9">
						<div class="caption">
							<div class="name"><h3><a href="product.html">撕开的墙</a></h3></div>
							<div class="info">	
								<ul>
									<li>类别: 现代拼剪</li>
									<li>尺寸: 200×300</li>
								</ul>
							</div>
							<div class="price">¥10000<span></span></div>
							<!--<label>数量: </label> <input class="form-inline quantity" type="text" value="1"><a href="#" class="btn btn-2 ">添加</a>-->
							<hr>
							<a href="#" class="btn btn-default pull-right">删除</a>
						</div>
					</div>
					<div class="clear"></div>
				</div>	
			</div>
			<div class="row">
				<div class="product well">
					<div class="col-md-3">
						<div class="image">
							<img src="images/dzp4.jpg" />
						</div>
					</div>
					<div class="col-md-9">
						<div class="caption">
							<div class="name"><h3><a href="product.html">北方</a></h3></div>
							<div class="info">
								<ul>
									<li>类别: 摄影作品</li>
									<li>尺寸: 180×140</li>
								</ul>
							</div>
							<div class="price">¥20000<span></span></div>
							<!--<label>数量: </label> <input class="form-inline quantity" type="text" value="1"><a href="#" class="btn btn-2 ">添加</a>-->
							<hr>
							<a href="#" class="btn btn-default pull-right">删除</a>
						</div>
					</div>
					<div class="clear"></div>
				</div>	
			</div>
			<div class="row">
				<div class="col-md-4 col-md-offset-8 ">
					<center><a href="#" class="btn btn-1">继续逛逛</a></center>
				</div>
			</div>
			<div class="row">
				<div class="pricedetails">
					<div class="col-md-4 col-md-offset-8">
						<table>
							<h6>价格详情</h6>
							<tr>
								<td>总计</td>
								<td>30000</td>
							</tr>
							<tr>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>邮费</td>
								<td>100.00</td>
							</tr>
							<tr style="border-top: 1px solid #333">
								<td><h5>总计</h5></td>
								<td>30100</td>
							</tr>
						</table>
						<center><a href="#" class="btn btn-1">提交</a></center>
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
