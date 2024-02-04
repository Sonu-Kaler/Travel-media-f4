// import React,{useState,useEffect} from "react";
// import img from "../Images/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg"
// import axios from "axios";
// import {Link,NavLink, useParams} from "react-router-dom";
// const Postno=()=>{
//     return(
//         <div className="open-post">
//                 <Link to="/">
//             <button className="btn">Click</button>
//             </Link>
//             <div className="open-post-s1">
//             <h2>Post Number </h2>
//             <img src={img}/>
//             </div>
//             <div className="open-post-s2">
//             <button>Details</button>
//             <button>User Info</button>
//             <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//             </p>
//             </div>
//         </div>
// )}
// export default Postno;



import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import back from "../Images/back.png"
const Postno = () => {
    const { id } = useParams();
    const location = useLocation();
    const { title, body } = location.state || {};

    return (
        <div className="open-post">
            <Link to="/">
                <button className="btn-back">
                    <img src={back} />
                </button>
            </Link>
            <div className="open-post-s1">
                <h2>Post Number {id}</h2>
                <img src={`https://picsum.photos/200?random=${id}`} alt={`Post ${id}`} className="postno-img" />
            </div>
            <div className="open-post-s2">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
}

export default Postno;

