import React, { useEffect } from "react";
import bg from "/src/assets/Background_image.jpg";
import { auth } from "../firebase";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
useEffect(()=>{
    if (auth.currentUser){
      navigate ("/welcome")
    }
}, [])

  return (
    
      <div>
        <img className="w-screen h-screen" src={bg} alt="bg_img" />
      </div>
    
  );
}

export default Home;