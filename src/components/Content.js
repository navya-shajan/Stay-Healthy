import React from "react";
import {Link} from "react-router-dom";
import "./content.css";

const ConatinerTile = ({imgPath, title, link}) =>(
   
    <div className="card">
        <img src={imgPath} alt={title} />  
        <div className="title-div"><Link className="title" to={link}>{title}</Link></div>              
    </div>
    
);

export function Content (){
    return(
        <>
        <div className="container">
        
            <ConatinerTile 
            imgPath="./images/food.jpg"
            title="FOOD"
            link="/Food"
            />
            <ConatinerTile 
            imgPath="./images/fitness.jpeg"
            title="FITNESS"
            link="/Fitness"
            />
            <ConatinerTile 
            imgPath="./images/health2.jpg"
            title="HEALTH"
            link="/Health"
            />
            <ConatinerTile 
            imgPath="./images/travelFood.jpeg"
            title="TRAVEL"
            link="/Travel"
            />
            
        </div>
        </>
    );
}