package cn.edu.xmu.saluta.artweb.entity;

import java.util.ArrayList;
import java.util.List;

/**
 *@className:Role.java
 *@author:肖瑶玲
 *@team:2-12Saluta
 *@date:2015年12月3日下午10:04:46
 */
public class Role {

    private int role_id;
    private String role_name;
    private List<User> userList = new ArrayList<User>();
    
    
    
	public Role() {
		super();
	}




	public Role(int role_id, String role_name) {
		super();
		this.role_id = role_id;
		this.role_name = role_name;
	}




	public Role(int role_id, String role_name, List<User> userList) {
		super();
		this.role_id = role_id;
		this.role_name = role_name;
		this.userList = userList;
	}

	/**
	 * @return the userList
	 */
	public List<User> getUserList() {
		return userList;
	}




	/**
	 * @param userList the userList to set
	 */
	public void setUserList(List<User> userList) {
		this.userList = userList;
	}




	/**
	 * @return the role_id
	 */
	public int getRole_id() {
		return role_id;
	}




	/**
	 * @param role_id the role_id to set
	 */
	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}




	/**
	 * @return the role_name
	 */
	public String getRole_name() {
		return role_name;
	}




	/**
	 * @param role_name the role_name to set
	 */
	public void setRole_name(String role_name) {
		this.role_name = role_name;
	}
    
    
}
