import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Protected_route(props) {
    const {component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let user = localStorage.getItem("user")
        if (user){
            navigate("/")
        }
        
    })
  return (
    <div>
      
    </div>
  )
}

export default Protected_route
