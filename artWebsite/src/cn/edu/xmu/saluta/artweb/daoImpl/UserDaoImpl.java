package cn.edu.xmu.saluta.artweb.daoImpl;


import java.sql.SQLException;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.edu.xmu.saluta.artweb.dao.UserDao;
import cn.edu.xmu.saluta.artweb.entity.User;

/** 
 * @className:UserDaoImpl.java
 * @team:2-12Saluta
 * @author:肖瑶玲
 * @date:2015年11月28日下午10:00:30
 */
public class UserDaoImpl extends HibernateDaoSupport implements UserDao {

	@Override
	public void register(User user) {
		// TODO Auto-generated method stub
		getHibernateTemplate().saveOrUpdate(user);
	}

	@Override
	public int login(String name, String password) {
		// TODO Auto-generated method stub
		Query query = getSession().createQuery("from User u where u.username = ? and u.password = ?");
		query.setParameter(0, name);
		query.setParameter(1, password);
		return Integer.parseInt(query.uniqueResult().toString());
	}

	@Override
	public User findUserById(int id) {
		// TODO Auto-generated method stub
		User user = getHibernateTemplate().get(User.class, id);
		if(user!=null)
	    	return user;
		return null;
	}

	@Override
	public User findUser(String hql) {
		// TODO Auto-generated method stub
		final String hql1=hql;
		User user=new User();
		List userList=getHibernateTemplate().executeFind(new HibernateCallback(){

			@Override
			public Object doInHibernate(Session session)
					throws HibernateException, SQLException {
				// TODO Auto-generated method stub
				Query query=session.createQuery(hql1);
				return query.list();
			}
		}
		);
		if (userList.size() > 0) {
            user = (User) userList.get(0);
        }
        return user;
	}
	
}

