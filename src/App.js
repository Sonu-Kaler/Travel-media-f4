import React from "react";
import style from "./style.css"
import Homemain from "./HomePage-Components/Homemain";
import Postmain from "./PostPage-Components/Postmain";
import {Routes, Route} from "react-router-dom";
const App=()=>{
    return(
        <div>
            <Routes>
<Route path="/" element={<Homemain />}/>
<Route path="/item/:id" element={<Postmain/>} />
</Routes>
            {/* <Homemain /> */}
            {/* <Postmain /> */}
        </div>
    )
}

export default App;