package cn.edu.xmu.saluta.artweb.service;

import cn.edu.xmu.saluta.artweb.entity.Role;
import cn.edu.xmu.saluta.artweb.entity.User;

/** 
 * @className:UserService.java
 * @team:2-12Saluta
 * @author:肖瑶玲
 * @date:2015年11月29日下午2:33:20
 */
public interface UserService {

	public int isUserExist(User user);//是否有同名用户
	public void register(User user); //注册
	public User login(User user);//登录
}

