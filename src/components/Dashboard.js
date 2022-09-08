import React from 'react';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import { Stories } from "./stories/Stories";


function Dashboard() {
    function handleLogout(){
        localStorage.clear();
        window.location.reload();
    }

  return (
    <div>
         <div style={{background: "#6a11cb"}}>
		
        <h1 className="fw-bold mb-2 text-uppercase text-white">Hacker News WebApp</h1>
        <button className="btn btn-lg px-5 bg-dark mb-4 text-white" >Logout</button> <br></br>
         <Link  className="w-bold mb-2 text-uppercase text-white" to='/favourites'>See Your Bookmarks Here! </Link>
        <div className="row">
        <Stories style={{background: "#6a11cb"}}/>
        </div>
    </div>



    </div>
  )
}

export default Dashboard