package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.model.Login;

@Repository
public interface ILoginDao extends JpaRepository<Login,Integer> {

    boolean existsByUsernameAndPassword(String username, String password);
	
    @Modifying
    @Query(value = "UPDATE login SET password = :password WHERE email = :email", nativeQuery = true)
    int forgetPassword(@Param("password") String password, @Param("email") String email);

}
