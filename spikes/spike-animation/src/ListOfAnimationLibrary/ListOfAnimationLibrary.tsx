import React from "react";
import { Link } from "react-router-dom";
import "./ListOfAnimationLibrary.css"

export const ListOfAnimationLibrary = () => {
    return (
        <div className='menu'>
            <Link to={"/"}>home</Link>

            <Link to={"motion"}>motion</Link>

            <Link to={"rtg"}>React Transition Group</Link>

            <Link to={"css"}>CSS</Link>
        </div>
    );
};
