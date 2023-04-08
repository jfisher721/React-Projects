import React from "react";
import Button from "./Button";

export default function() {
    function handleClick() {
        console.log('Button Clicked!');
    }

    return (
        <div className="info-block">
            <h4 className="name">Josh Fisher</h4>
            <h4 className="job-title">Frontend Developer</h4>
            <h4 className="email">myemail@gmail.com</h4>
            <Button onClick={handleClick} label="EMAIL" />
            <h4 className="about">About</h4>
            <h4 className="paragraph1">
                I'm a fresh graduate of the Software Design program at
                WWCC where I made President's List every quarter. I have
                experience with Javascript, React, C# and ASP.NET and
                I'm eager to try out my skills in the professional world.
            </h4>
            <h4 className="interests"> Interests</h4>
            <h4 className="paragraph2">
                I have a passion for music, billiards, films, and good novels.
                I consider a well crafted videogame to be the purest form of art.
            </h4>
            
        </div>
    )
}