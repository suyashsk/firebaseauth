import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div
        id="top"
        className="py-4 px-16 bg-cyan-950 flex items-center justify-end"
      >
        {/* <Link to="/Home" className="text-white px-6 text-xl py-2 mx-2 font-bold bg-yellow-400 rounded ">
          Home
        </Link> */}
        <Link to="/signin" className="text-white px-6 text-xl py-2 mx-2 font-bold bg-yellow-400 rounded">
          Sign-In
        </Link>
      </div>
    </>
  );
}

export default Nav;