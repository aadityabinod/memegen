import React from "react";
import '../App.css'
import Meme from "./Meme";
import memelogo from '../assets/memelogo.png'

function Header(){
    return(
        <>
   <header className="header">
    <img src={memelogo} className="header--image" />
    <h2 className="header--title">Meme Generator</h2>
   </header>
   <Meme />
    </>
    )

}

export default Header