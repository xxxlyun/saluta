<%@ page contentType="text/html; charset=UTF-8" %> 
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>artistregister.jsp</title>
	
	
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
						<li><a href="account.html"><span class="glyphicon glyphicon-user"></span>个人中心 </a></li>
						<li><a href="contact.html"><span class="glyphicon glyphicon-envelope"></span> 留言</a></li>
					</ul>
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
					<li><a href="index.html">首页</a></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">定制中心</a>
						<div class="dropdown-menu">
							<div class="dropdown-inner">
								<ul class="list-unstyled">
									<li><a href="category.html">定制说明</a></li>
									<li><a href="category.html">我要定制</a></li>
								</ul>
							</div>
						</div>
					</li>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">定制作品展示 </a>
						<div class="dropdown-menu">
							<div class="dropdown-inner">
								<ul class="list-unstyled">
									<li><a href="category.html">油画定制</a></li>
									<li><a href="category.html">国画定制</a></li>
									<li><a href="category.html">书法定制</a></li>
									<li><a href="category.html">根雕定制</a></li>
									<li><a href="category.html">肖像定制</a></li>
								</ul>
							</div> 
						</div>
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
			<div class="row">
			
				<div class="col-md-6">
					<div class="heading"><h2>艺术家,你好！来加盟saluta吧</h2></div>
					<form name="form2" id="ff2" method="post" action="register.php">
                    <div class="form-group">
							<input type="text" class="form-control01" placeholder="身份证件号码:" name="password" id="password" required>
						</div>
                        <div class="form-group">
                            <form id="form1" runat="server" method="post" enctype="multipart/form-data"> 
								<div> 
									<div class="_box"> 
										<input type="file" name="_f" id="_f" /> 个人简介
									</div> 
								</div> 
							</form> 
                        </div>
                           <div class="form-group">
                            <form id="form1" runat="server" method="post" enctype="multipart/form-data"> 
								<div> 
									<div class="_box"> 
										<input type="file" name="_f" id="_f" /> 资格认证
									</div> 
								</div> 
							</form> 
                        </div>
                        
						   <div class="form-group">
                            <form id="form1" runat="server" method="post" enctype="multipart/form-data"> 
								<div> 
									<div class="_box"> 
										<input type="file" name="_f" id="_f" /> 选择头像
									</div> 
								</div> 
							</form> 
                        </div>
						<div class="form-group">
							<input type="password" class="form-control01" placeholder="密码  :" name="password" id="password" required>
						</div>
						<div class="form-group">
							<input name="agree" id="agree" type="checkbox" > 我同意加入saluta艺术家联盟.
						</div>
						<button type="submit" class="btn btn-1">加盟</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	
</body>
</html>