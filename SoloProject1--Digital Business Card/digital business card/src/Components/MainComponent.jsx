import React from 'react';
import Portrait from './Portrait';
import Info from './Info';
import Footer from './Footer';

export default function() {
    return (
        <div>
            <div className= "main">
                <Portrait />
                <Info />
                <Footer />
            </div>
        </div>
        
    )
}