import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import { useHistory } from "react-router";
import './Artical.css'

const ArticalHolder = ({title, data,handleArticalClick}) =>{
    return(
        <div className="artical-container">
           {data && <div> 
                <h2>{title}</h2>
                <ul> 
                    {data.Resources.Resource
                        .filter(item => item.Categories.includes(title))
                        .map((item) => <li key={item.Id} className="item" onClick={() => handleArticalClick(item.Id) }>{item.Title}</li>)  
                    }
                </ul></div>}
        </div>
    )}
export function Aritcal() {
    let {title} = useParams();
    const history = useHistory();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
        useEffect(() => {
            let unmounted = false;
            fetch(`https://health.gov/myhealthfinder/api/v3/topicsearch.json`)
            .then((response) => response.json())
            .then((res) =>{ 
                            if(!unmounted){
                                setData(res.Result);
                            }
                            setIsLoading(false);
            })
            .catch((e) => {
                            console.log(e);
                            setIsLoading(false);
            })
            return () =>{
                unmounted = true;
            }
        }, [isLoading])
        
    if(isLoading){
       return <div>LOADING</div>
    }
    const handleArticalClick = (itemId) => {
        history.push(`/artical/${itemId}`);
     }
    if(title === 'Mental Health and Relationships'){
       const title1 = 'Mental Health';
       const title2 = 'Relationships';
       return(<div>
        <ArticalHolder 
        title={title1}
        data={data}
        handleArticalClick={handleArticalClick}
        />
        <ArticalHolder 
        title={title2}
        data={data}
        handleArticalClick={handleArticalClick}
    /></div>
       )    
    }
    if(title === 'Regular Checkups'){
        const title1 = 'Checkups for Children and Teens';
        const title2 = 'Checkups for Adults';
        return(<div><ArticalHolder
        title={title1}
        data={data}
        handleArticalClick={handleArticalClick} 
        />
        <ArticalHolder
        title={title2}
        data={data}
        handleArticalClick={handleArticalClick} 
        /></div>)
    }
return(
    <ArticalHolder 
    title={title}
    data={data}
    handleArticalClick={handleArticalClick}
    />
)   
}