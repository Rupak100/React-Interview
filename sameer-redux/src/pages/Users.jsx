import React, { useEffect } from 'react'
import {useDispatch, useSelector} from  "react-redux"
import { GET_USERS } from '../redux/useAction';

const Users = () => {
    const dispatch = useDispatch();
    const users =useSelector((state) =>state.users.allUsers);
    const getUsers = async() =>{
        let data =await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await data.json();
        dispatch({type:GET_USERS,payload:users});

    }

    useEffect(()=>{
        getUsers();
    },[])
  return (
    <div>
        <ul>
            {users?.map((s)=>{
                return(
                    <li style={{padding:"10px", height:"40px"}}>{s.name} -- {s.username} -- {s.id}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default Users