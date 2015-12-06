package cn.edu.xmu.saluta.artweb.dao;

import cn.edu.xmu.saluta.artweb.entity.User;

/** 
 * @className:UserDao.java
 * @team:2-12Saluta
 * @author:肖瑶玲
 * @date:2015年11月28日下午9:58:43
 */
public interface UserDao {

	public User findUserById(int id);
	public void register(User user);
	public int login(String name, String password);	
	public User findUser(String hql);//查询
}

