import React, { useState,useEffect } from 'react';
import NewsItem from './NewsItem.js';
export default function News(){

  const [articles, setarticles] = useState([]);
  const [Page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState();

  const api ='https://newsapi.org/v2/top-headlines?country=us&apiKey=83f995d140d748ff9626f2aa8a697ab3&pageSize=15';

  async function fetchData(){
    const data= await fetch(`${api}&page=${Page}`);
    const parsedData=await data.json();
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);

  };
  useEffect(() => {
    fetchData()
  }, [Page])

 const handlePrevClick=()=>{
  setPage(Page-1);
}
  const handleNextClick=()=>{
    if(Page+1>Math.ceil(totalResults/15)){

    }
  else{
    setPage(Page+1);

  }
};
    return(
        <div className="container my-3">
        <h1>NewsMonkey-Top Headlines</h1>
        <div className="row">
          
            {articles.map((element)=>{
              return(<div className="col-md-4"key={element.url}>
                        <NewsItem  title={element.title===null?"":element.title} description={element.description===null?"":element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                      </div>)
            
          })}
          <div className='container d-flex justify-content-between'>

            <button  type="button" disabled={Page<=1} className="btn btn-dark"onClick={handlePrevClick}>&larr;Previous</button>
            <button type="button" disabled={Page+1>Math.ceil(totalResults/15)}className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
          </div>
        </div>
        </div>
     
    )
}