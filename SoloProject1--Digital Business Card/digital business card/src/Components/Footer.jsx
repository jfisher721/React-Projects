import React from "react";
import discord from '../assets/discord.png'
import github from '../assets/github.png'


export default function() {
    return (
        <div className="footer">
            <ul className="footer-items">
                <li><img src={discord} height="60px" width="75px"/></li>
                <li><img src={github} height="65px" width="80px"/></li>
            </ul>
        </div>
    )
}