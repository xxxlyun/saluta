package cn.edu.xmu.saluta.artweb.action;

import java.util.regex.Pattern;

import javax.annotation.Resource;

import cn.edu.xmu.saluta.artweb.entity.Role;
import cn.edu.xmu.saluta.artweb.entity.User;
import cn.edu.xmu.saluta.artweb.service.UserService;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

/**
 *@className:registerAction.java
 *@author:肖瑶玲
 *@team:2-12Saluta
 *@date:2015年12月4日下午5:56:34
 */
public class RegisterAction extends ActionSupport {
	
	@Resource(name="userService")
	private UserService userService;
	
	private String username;
	private String password;
	private String nickname;
	private String email;
	private String address;
	//private int gender;
	private String tel;
	private String repassword;
	
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
	 * @return the repassword
	 */
	public String getRepassword() {
		return repassword;
	}

	/**
	 * @param repassword the repassword to set
	 */
	public void setRepassword(String repassword) {
		this.repassword = repassword;
	}

	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		System.out.println(getUsername()+getPassword()+getNickname()+
				getAddress()+getEmail()+getTel());
		User user=new User();
		user.setUsername(getUsername());
		user.setPassword(getPassword());
		user.setNickname(getNickname());
		user.setAddress(getAddress());
		user.setEmail(getEmail());
		//user.setGender(0);
		user.setTel(getTel());
		user.setRole(new Role(2,"用户"));
		user.setForbid(0);
		System.out.println(user.getUid()+user.getUsername()+user.getPassword()+user.getNickname()+
				user.getAddress()+user.getEmail()+user.getForbid()+user.getGender()+user.getTel()+user.getRole().getRole_name());
		userService.register(user);
		if(user!=null){
			ActionContext.getContext().getSession().put("user", user);
			return SUCCESS; 
		}
		return INPUT;
	}
	/*
	@Override
	public void validate() {
		// TODO Auto-generated method stub
		//判断用户名是否输入,如果输入了再判断格式是否正确
		System.out.println(getUsername()+" "+getPassword()+" "+getNickname()+
				" "+getAddress()+" "+getEmail()+" "+getTel());
				if(getUsername() == null || "".equals(getUsername().trim())){
					this.addFieldError("username2", "用户名必须输入");
				}else if ( !Pattern.matches("\\w{6,20}", getUsername().trim())) {
					this.addFieldError("username2", "用户名为长度6到20的字母、数字");
				}else{
					User u=new User();
					u.setUsername(getUsername());
					int check=userService.isUserExist(u);
					if(check!=0){
						this.addFieldError("username2", "用户名已经存在");
					}
				}
				//判断密码是否输入,如果输入了再判断格式是否正确
				if(getPassword() == null || "".equals(getPassword().trim())){
					this.addFieldError("password2", "密码必须输入");
				}else if( !Pattern.matches("\\w{6,20}",getPassword().trim())) {
					this.setPassword("");
					this.addFieldError("password2", "密码为长度6到20的字母、数字");
				}
				//判断确认密码是否输入,如果输入了再判断格式是否正确
				if(getRepassword() == null || "".equals(getRepassword().trim())){
					this.addFieldError("repassword", "确认密码必须输入");
				}else if( !Pattern.matches("\\w{6,20}", repassword.trim())) {
					this.setRepassword("");
					this.addFieldError("repassword", "确认密码为长度6到20的字母、数字");
				}
				//判断确认密码和密码是否相同
				if(getPassword() != null && getRepassword() != null && ! getRepassword().equals(getPassword()) &&
					getPassword() != "" && getRepassword() !=""){
					this.setRepassword("");
					this.addFieldError("repassword","两次密码必须相同");
				}
				
				//判断昵称
				if(!Pattern.matches("\\w{6,20}",getNickname().trim())) {  
					this.addFieldError("nickname","昵称为长度6到20的字母、数字");
				}
				
				//判断号码
				if(getTel() == null || "".equals(getTel().trim())){
					this.addFieldError("tel", "电话号码必须输入");
				}
					else if(!Pattern.matches("^1[358]\\d{9}$", getTel().trim())){
						this.addFieldError("tel", "电话号码为11位数字");
					}
					
	}*/
}
