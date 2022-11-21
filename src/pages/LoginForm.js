import React,{useState}from 'react'
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {

   
    return (
    <>
    
      <div className='logindiv'>
      <form>
        <h2 style={{paddingTop:10,paddingLeft:120}}>Fill Your Information</h2>
      <label style={{marginTop:-80, marginLeft:20, fontWeight:"bold",fontSize:25}}>Username</label>
      <input type="text" data-test="username" style={{marginLeft:40,marginTop:40,height:25}}/> <br/>
      <label style={{marginTop:30, marginLeft:20, fontWeight:"bold",fontSize:25}}>Email</label>
      <input type="email" data-test="email" style={{marginLeft:85,height:25,marginTop:40}}/> <br/>
      <label style={{marginBottom:30,marginLeft:20, fontWeight:"bold",fontSize:25}}>Password</label>
      <input type="password" data-test="password" style={{marginLeft:45,marginTop:50,height:25}}/> <br/><br/>
      <input type="submit" value="Submit" data-test="submit" style={{marginTop:55, marginLeft:120, width:150, fontSize:35,height:45,width:200}} />
      </form>
      </div>
     
    </>
  )
}

export default LoginForm;