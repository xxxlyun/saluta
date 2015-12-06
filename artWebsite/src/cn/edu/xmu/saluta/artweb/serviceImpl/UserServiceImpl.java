package cn.edu.xmu.saluta.artweb.serviceImpl;

import javax.annotation.Resource;

import cn.edu.xmu.saluta.artweb.dao.BaseDao;
import cn.edu.xmu.saluta.artweb.dao.UserDao;
import cn.edu.xmu.saluta.artweb.entity.Role;
import cn.edu.xmu.saluta.artweb.entity.User;
import cn.edu.xmu.saluta.artweb.service.UserService;

/** 
 * @className:UserServiceImpl.java
 * @team:2-12Saluta
 * @author:肖瑶玲
 * @date:2015年11月29日下午2:37:30
 */
public class UserServiceImpl implements UserService {

	@Resource(name="userDao")
	private UserDao userDao;
	
	//TODO
	@Override
	public void register(User user) {
		// TODO Auto-generated method stub
		userDao.register(user);
	}

	//TODO
	@Override
	public User login(User user) {
		// TODO Auto-generated method stub
		User u=userDao.findUser("from User where username='"+user.getUsername()+"' And password='"+user.getPassword()+"'");
		//System.out.println(u.getUsername()+" "+u.getPassword());
		if(u!=null){
			//System.out.print(u.getUsername());
			return u;
		}
		return null;
	}


	/**
	 * @return the userDao
	 */
	public UserDao getUserDao() {
		return userDao;
	}

	/**
	 * @param userDao the userDao to set
	 */
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	@Override
	public int isUserExist(User user) {
		// TODO Auto-generated method stub
		User u=userDao.findUser("from User where username='"+user.getUsername()+"'");
		if(u==null){
			return 0;
		}
		else if(!u.getPassword().equals(user.getPassword()))
		{
			return 1;
		}
		return 2;
	}

}

