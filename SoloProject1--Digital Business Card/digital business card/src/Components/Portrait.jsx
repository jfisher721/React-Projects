import React from 'react';
import picture from '../assets/PictureOfMe.jpg';

export default function() {
    return (
        <div className="portrait">
            <img src={picture} className="pic"/>
        </div>
    )
}