import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";




const Welcome = () => {

  const navigate = useNavigate();
const logout = async () => {
  
  try {
    await signOut(auth);
    navigate("/home");
  } catch (err) {
    alert(err.message);
  }
};
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-200">
      <div className="p-8 m-8 space-y-8 text-center bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-700">Welcome to Firebase</h1>
        <p className="text-lg text-gray-600">
          Firebase is an app development platform that helps you build and grow apps and games users love. 
          Backed by Google and loved by app development teams - from startups to global enterprises.
        </p>
        <button onClick={logout} className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          logout
        </button>
      </div>
    </div>
  );
};

export default Welcome;