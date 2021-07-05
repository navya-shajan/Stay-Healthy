import {useParams, Link} from "react-router-dom"
import {useEffect, useState} from "react"
import {Loader} from './../components/Loader';
import './Artical.css'

const ArticalHolder = ({title, data}) =>{
    return(
        <div className="artical-container">
           {data && <div> 
                <h2>{title}</h2>
                <ul> 
                    {data.Resources.Resource
                        .filter(item => item.Categories.includes(title))
                        .map((item) => <li key={item.Title}><Link to={{pathname: `/${title}/${item.Id}`}} key={item.Id} className="item" >{item.Title}</Link></li>)  
                    }
                </ul></div>}
        </div>
    )}
export function Aritcal() {
    let {title} = useParams();
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
                            setIsLoading(false);
                            console.log(e);
                            return (<div><h1>{e}</h1></div>);
                            
            })
            return () =>{
                unmounted = true;
            }
        }, [])
        
    if(isLoading){
       return <div><Loader /></div>
    }
    if(title === 'Mental Health and Relationships'){
       const title1 = 'Mental Health';
       const title2 = 'Relationships';
       return(<div>
        <ArticalHolder 
        title={title1}
        data={data}
        
        />
        <ArticalHolder 
        title={title2}
        data={data}
        
    /></div>
       )    
    }
    if(title === 'Regular Checkups'){
        const title1 = 'Checkups for Children and Teens';
        const title2 = 'Checkups for Adults';
        return(<div><ArticalHolder
        title={title1}
        data={data}
         />
        <ArticalHolder
        title={title2}
        data={data}
        /></div>)
    }
return(
    <ArticalHolder 
    title={title}
    data={data}
   />
)   
}