<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    <%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
   <form action="loginAction" method="post">
     <label>username:</label><input type="text" name="role.role_id"/><br/>
     <label>password:</label><input type="password" name="user.password"/><br/>
     <input type="submit" value="提交"/>
   </form>
</body>
</html>