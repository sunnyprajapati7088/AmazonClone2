import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../Slice/Auth';

function Profile() {
    const userName = useSelector((state => state.auth.Auth))
    console.log(userName)
    const dispatch = useDispatch();
    function handleLogin(){
        dispatch(removeUser())
    }
  return (
    <div>
      Profile
      <Link to={"/sign"} onClick={() => handleLogin()}>
        LogoOut
      </Link>
      <p className='text-black'>{userName}</p>
    </div>
  );
}

export default Profile
