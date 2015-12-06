package cn.edu.xmu.saluta.artweb.action;

import java.util.List;

import javax.annotation.Resource;

import cn.edu.xmu.saluta.artweb.entity.Role;
import cn.edu.xmu.saluta.artweb.entity.User;
import cn.edu.xmu.saluta.artweb.service.UserService;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

/** 
 * @className:UserAction.java
 * @team:2-12Saluta
 * @date:2015年11月29日下午2:47:44
 */
public class UserAction extends ActionSupport{

	//Service对象
    	@Resource(name="userService")
		private UserService userService;
		//User对象
		private User user;
		private Role role;
		
		//userSerivice属性的get方法
		public UserService getUserService() {
			return userService;
		}
		//userSerivice属性的set方法
		public void setUserService(UserService userService) {
			this.userService = userService;
		}

		
		
		/**
		 * @return the role
		 */
		public Role getRole() {
			return role;
		}
		/**
		 * @param role the role to set
		 */
		public void setRole(Role role) {
			this.role = role;
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
		// 登录方法
		public String login() {
		/*	if (userService.login(user.getUsername(), user.getPassword())) {
				return SUCCESS;
			}
			return ERROR;
			*/
			List<User> userList = this.userService.getUser(role).getUserList();
			for(int i=0;i<userList.size();i++){
	    		System.out.println(userList.get(i).getUsername());
			}
			return INPUT;
		}
}

