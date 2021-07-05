import React, {useState, useEffect} from "react";
import Navbar from './components/Navbar';
import {Content} from './components/Content';
import {Aritcal} from './Article/Artical';
import{ArticalContent} from './ArticalContent/ArticalContent';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      let unmounted = false;
        fetch("https://health.gov/myhealthfinder/api/v3/itemlist.json")
        .then((response) => response.json())
        .then((data) =>{
                        if(!unmounted)
                        {setTopics(data.Result.Items.Item);}
                        setIsLoading(false)
        })
        .catch((e) => {
                        console.log(e);
                        setIsLoading(false);
        })
        return () =>{
          unmounted = true;
        }
    }, []) 
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" >
          <Content  data={topics} isLoading={isLoading}/>
          </Route>
          <Route path="/:title/:id">
          <ArticalContent />
          </Route>
          <Route path="/:title">
          <Aritcal />
          </Route>
        </Switch> 
      </Router>
    </div>
  );
  }
export default App;
