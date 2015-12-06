package cn.edu.xmu.saluta.artweb.action;

import cn.edu.xmu.saluta.artweb.entity.User;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import org.apache.struts2.ServletActionContext;

/**
*@className:LogoutAction.java
 *@author:肖瑶玲
 *@team:2-12Saluta
 *@date:2015年12月4日下午8:35:22
 */
public class LogoutAction extends ActionSupport {

	@Override
	public String execute() throws Exception {
		 User user = (User)ServletActionContext.getRequest().getSession().getAttribute("user");
	     ActionContext.getContext().getSession().clear();
	     System.out.print(user.getUsername() + "已经登出");
	     return SUCCESS;
	}
}
