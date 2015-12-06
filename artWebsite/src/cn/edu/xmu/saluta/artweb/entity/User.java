package cn.edu.xmu.saluta.artweb.entity;

import java.util.Date;
/** 
 * @className:user.java
 * @team:2-12Saluta
 * @date:2015年11月25日下午4:16:12
 */
public class User {
	
	private int uid;
//	private int role_id;
	private String username;
	private String nickname;
	private String password;
	private int gender;
	private String tel;
	private String address;
	private String email;
	private int forbid;
	private Role role;
	
	public User(){
		
	}
	
	
	public User(int uid, String username, String nickname, String password,
			int gender, String tel, String address, String email, int forbid) {
		super();
		this.uid = uid;
		this.username = username;
		this.nickname = nickname;
		this.password = password;
		this.gender = gender;
		this.tel = tel;
		this.address = address;
		this.email = email;
		this.forbid = forbid;
	}

	

	public User(int uid, String username, String nickname, String password,
			int gender, String tel, String address, String email, int forbid,
			Role role) {
		super();
		this.uid = uid;
		this.username = username;
		this.nickname = nickname;
		this.password = password;
		this.gender = gender;
		this.tel = tel;
		this.address = address;
		this.email = email;
		this.forbid = forbid;
		this.role = role;
	}


	/**
	 * @return the uid
	 */
	public int getUid() {
		return uid;
	}


	/**
	 * @param uid the uid to set
	 */
	public void setUid(int uid) {
		this.uid = uid;
	}


	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}


	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}


	/**
	 * @return the nickname
	 */
	public String getNickname() {
		return nickname;
	}


	/**
	 * @param nickname the nickname to set
	 */
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}


	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}


	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}


	/**
	 * @return the gender
	 */
	public int getGender() {
		return gender;
	}


	/**
	 * @param gender the gender to set
	 */
	public void setGender(int gender) {
		this.gender = gender;
	}


	/**
	 * @return the tel
	 */
	public String getTel() {
		return tel;
	}


	/**
	 * @param tel the tel to set
	 */
	public void setTel(String tel) {
		this.tel = tel;
	}


	/**
	 * @return the address
	 */
	public String getAddress() {
		return address;
	}


	/**
	 * @param address the address to set
	 */
	public void setAddress(String address) {
		this.address = address;
	}


	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}


	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}


	/**
	 * @return the forbid
	 */
	public int getForbid() {
		return forbid;
	}


	/**
	 * @param forbid the forbid to set
	 */
	public void setForbid(int forbid) {
		this.forbid = forbid;
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

	
}

