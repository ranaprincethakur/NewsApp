import React, { useState,useEffect } from 'react';
import NewsItem from './NewsItem.js';
export default function News(){

  const [articles, setarticles] = useState([]);
  const api ='https://newsapi.org/v2/top-headlines?q=trump&apiKey=83f995d140d748ff9626f2aa8a697ab3'
  async function fetchData(){
    const data= await fetch(api);
    const parsedData=await data.json();
    setarticles(parsedData.articles);

  }
  useEffect(() => {
    fetchData()
  }, [])
    return(
        <div className="container my-3">
        <h2>NewsMonkey-Top Headlines</h2>
        <div className="row">
          
            {articles.map((element)=>{
              return(<div className="col-md-4"key={element.url}>
                        <NewsItem  title={element.title===null?"":element.title} description={element.description===null?"":element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                      </div>)
            
          })}
            
        </div>
        </div>
     
    )
}