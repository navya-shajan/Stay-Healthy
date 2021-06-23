import React from "react";
import {useHistory} from "react-router-dom";
import "./mainContent.css";

const ConatinerTile = ({imgPath, title, data, parentID, handleTitleClick}) => (
    <div className="card" >  
       <div className="image-container"><img className="image" src={imgPath} alt={title} /></div>   
        <div className="title-div"><h3 className="title">{title}</h3></div>  
        <div className="content-container">
            <ul className="list-items" >
                {data
                    .filter(item => item.Type === 'Category' && item.ParentId === parentID)
                    .map((item) => <li className="item"  onClick={() => handleTitleClick(item.Title)} key={item.Id}>{item.Title}</li>)  
                }
            </ul>
        </div>             
    </div> 
);

export function Content ({data, isLoading}){
    const history = useHistory();
    const handleTitleClick = (title) => {
        history.push(`/${title}`);
    }
    if(isLoading){
        return <div>LOADING...</div>
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
            handleTitleClick={handleTitleClick}
            />
            <ConatinerTile 
            key='124'
            imgPath="./images/doctor-visit.jpg"
            title="DOCTOR VISIT"
            data={data}
            parentID='125'
            handleTitleClick={handleTitleClick}
            />
            <ConatinerTile 
            key='125'
            imgPath="./images/health2.jpg"
            title="HEALTH CONDITION"
            data={data}
            parentID='124'
            handleTitleClick={handleTitleClick}
            />
            <ConatinerTile 
            key='127'
            imgPath="./images/pregnancy.jpg"
            title="PREGNANCY"
            data={data}
            parentID='127'
            handleTitleClick={handleTitleClick}
            />
            
        </div>
        </>
    );
}