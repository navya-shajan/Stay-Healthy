import { useParams } from "react-router";
import { useState, useEffect } from "react"
import {Loader} from './../components/Loader'
import './ArticalContent.css'

const Display = ({data}) => (
    <div className="artical-content">
        <div className="heading"><h1 key={data[0].id}>{data[0].Title}</h1></div>
            {data[0].Sections.section.map((elements, i) =>{
                 return(
                  <div className="wrapper-element" key={elements.Title}>
                  <h3 key={i}>{elements.Title}</h3>
                  <p dangerouslySetInnerHTML={ {__html: elements.Content} } className="para" key={i+1} />
                  </div>
            )})}     
    </div>
);
export function ArticalContent (){
    const {id} = useParams();
    const search = `?TopicId=${id}`;
    const [data, setData] = useState([]);
    //const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        let unmounted = false;
        fetch(`https://health.gov/myhealthfinder/api/v3/topicsearch.json${search}`)
        .then((response) => response.json())
        .then((res) =>{ 
                        if(!unmounted){
                            setData(res.Result.Resources.Resource);
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
    }, [search, isLoading])

    if(isLoading){
        return  <div><Loader /></div>
      } 
    return (
        <>
        {data && <Display  data={data}/> }
        </>
        ) 
}