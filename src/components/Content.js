import React from "react";
import {Link} from "react-router-dom";
import "./mainContent.css";
import {Loader} from './Loader';

const ConatinerTile = ({imgPath, title, data, parentID}) => (
    <div className="card" >  
       <div className="image-container"><img className="image" src={imgPath} alt={title} /></div>   
        <div className="title-div"><h3 className="title">{title}</h3></div>  
        <div className="content-container">
            <ul className="list-items" >
                {data
                    .filter(item => item.Type === 'Category' && item.ParentId === parentID)
                    .map((item) => <li key={item.Title}><Link className="item" to={{pathname: `/${item.Title}`}}  key={item.Id}>{item.Title}</Link></li>)  
                }
            </ul>
        </div>             
    </div> 
);

export function Content ({data, isLoading}){
    
    
    if(isLoading){
        return <Loader />
    }
    return(
        <>
        <div className="container">
        
            <ConatinerTile 
            key='126'
            imgPath="./images/family.jpg"
            title="HEALTHY LIVING"
            data={data}
            parentID='126'
            
            />
            <ConatinerTile 
            key='124'
            imgPath="./images/doctor-visit.jpg"
            title="DOCTOR VISIT"
            data={data}
            parentID='125'
            
            />
            <ConatinerTile 
            key='125'
            imgPath="./images/health2.jpg"
            title="HEALTH CONDITION"
            data={data}
            parentID='124'
           
            />
            <ConatinerTile 
            key='127'
            imgPath="./images/pregnancy.jpg"
            title="PREGNANCY"
            data={data}
            parentID='127'
            
            />
            
        </div>
        </>
    );
}