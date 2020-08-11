import React from 'react';
import './DreamwayHome.css'
import DreamwayLayout from './Layouts/DreamwayLayout';
const DreamwayHome = (props) => {
    return (
        <>
        <DreamwayLayout /> 
        <div className="Dreamway-Container">
            <img className="Dreamway-home-image" src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1597022992/Dreamway1_2_r7crx5.jpg" />
        </div>
        </>
    )
}

export default DreamwayHome 