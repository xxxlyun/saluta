package cn.edu.xmu.saluta.artweb.action;

import javax.annotation.Resource;

import cn.edu.xmu.saluta.artweb.entity.User;
import cn.edu.xmu.saluta.artweb.service.UserService;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

/**
 *@className:LoginAction.java
 *@author:肖瑶玲
 *@team:2-12Saluta
 *@date:2015年12月4日下午8:35:22
 */
public class LoginAction extends ActionSupport {

	@Resource(name="userService")
	private UserService userService;
	private User user;
	
	/**
	 * @return the userService
	 */
	public UserService getUserService() {
		return userService;
	}

	/**
	 * @param userService the userService to set
	 */
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	/**
	 * @return the user
	 */
	public User getUser() {
		return user;
	}

	/**
	 * @param user the user to set
	 */
	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		//登录前清空所有session
		//System.out.println(user.getUsername()+" "+user.getPassword());
		ActionContext.getContext().getSession().clear();
		User u=userService.login(user);
		if(u!=null){
			ActionContext.getContext().getSession().put("user", u);
			return SUCCESS;
		}
		return INPUT;
	}

	@Override
	public void validate() {
		// TODO Auto-generated method stub
		if (user.getPassword().length() == 0) {
			addFieldError("password", getText("password is required"));
		}
		if (user.getUsername().length() == 0) {
			addFieldError("username", getText("username is required"));
		}
		int errortype = userService.isUserExist(user);
		if(errortype == 0 && user.getPassword().length() != 0){
			addFieldError("nouser",getText("user is not exist"));
		}else if(errortype == 1 && user.getPassword().length() != 0){
			addFieldError("wrongpassword",getText("password is wrong"));
		}
	}

}
