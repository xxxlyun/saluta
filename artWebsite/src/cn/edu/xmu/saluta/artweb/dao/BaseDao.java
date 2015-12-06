package cn.edu.xmu.saluta.artweb.dao;

import com.mysql.jdbc.Connection;
import java.io.Serializable;
import java.util.List;

public interface BaseDao {

	public Object loadById(Class clazz, int id);

	public Object loadObject( String hql);

	public void  delById(Class clazz, int id);

	public void saveOrUpdate(Object obj);

	public List listAll(String clazz);

	public List listAll(String clazz, int pageNo, int pageSize);

	public int countAll(String clazz);

	public List query(String hql);

	public List query(String hql, int pageNo, int pageSize);

	public int countQuery(String hql);

	public int update(String hql);

	public Connection getConnection();
        
       
        
}