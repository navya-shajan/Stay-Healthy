import { useParams } from "react-router";
import { useState, useEffect } from "react"
import './ArticalContent.css'

export function ArticalContent (){
    const {id} = useParams();
    const search = `?TopicId=${id}`;
    const [data, setData] = useState([]);
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
        return  <div>LOADING...</div>
      }
       return( 
        <div className="artical-content">
            {data && data[0].Sections.section.map((elements) =>{
                return ( 
                  <div key={elements.Title} className="wrapper-element">
                  <h3>{elements.Title}</h3>
                  <p dangerouslySetInnerHTML={ {__html: elements.Content} } className="para" />
                  </div>
                  )}
              )}
        </div>)
}