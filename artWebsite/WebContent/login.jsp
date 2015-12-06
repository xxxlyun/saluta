<%@ page contentType="text/html; charset=UTF-8" %> 
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>login.jsp</title>
	
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
					
				</div>
			</div>
		</div>
	</nav>
	<!--Header-->
	<header class="container">
		<div class="row">
			
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
					<li><a href="index.jsp">首页</a></li>
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
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">艺术品拍卖 </a>
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
	<!--///////////////////Account Page///////////////////-->
	<!--//////////////////////////////////////////////////-->
	<div id="page-content" class="single-page">
		<div class="container">
			
			
				<div class="col-md-6">
					<div class="heading">
					  <h2>登录</h2></div>
					<form name="form1" id="ff1" method="post" action="loginAction">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="用户名 :" name="user.username" id="username" required>
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="密码  :" name="user.password" id="password" required>
						</div>
						<button type="submit" class="btn btn-1" name="login" id="login">登录</button>
						<a href="#">忘记密码</a><br>
                        <a href="userregister.jsp">还没有成为saluta?点这里注册吧</a>
					</form>
				</div>
			
		</div>
	</div>
	
</body>
</html>