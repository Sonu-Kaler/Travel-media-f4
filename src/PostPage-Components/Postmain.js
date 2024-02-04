import React from "react";
import Navbar from "../HomePage-Components/Navbar";
import Postno from "./Postno";
import Morepost from "./Morepost";
const Postmain=()=>{
    // console.log({title});
    return(
<div>
    <Navbar />
    <Postno />
    <Morepost />
</div>
    )
}
export default Postmain;