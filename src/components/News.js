import React, { useState,useEffect } from 'react';
import NewsItem from './NewsItem.js';
import propTypes from "prop-types";
import Spinner from './Spinner.js';
export default function News(props){

  const [articles, setarticles] = useState([]);
  const [Page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState();
  const [loading, setloading] = useState(true);

  const api =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=83f995d140d748ff9626f2aa8a697ab3&pageSize=${props.pageSize}`;

  async function fetchData(){
    setloading(true);
    const data= await fetch(`${api}&page=${Page}`);
    const parsedData=await data.json();
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);

  };
  useEffect(() => {
    fetchData()
  }, [Page])

 const handlePrevClick=()=>{
  setPage(Page-1);
}
  const handleNextClick=()=>{
    if(!(Page+1>Math.ceil(totalResults/props.pageSize))){
    setPage(Page+1);
  }
};
    return(
        <div className="container my-3">
        
        <h1 className='text-center'style={{margin:'40px 0px'}}>NewsMonkey-Top Headlines</h1>
        {loading && <Spinner/>}
        <div className="row">
          
            {!loading && articles.map((element)=>{
              return(<div className="col-md-4"key={element.url}>
                        <NewsItem  title={element.title===null?"":element.title} description={element.description===null?"":element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                      </div>)
            
          })}
          <div className='container d-flex justify-content-between'>

            <button  type="button" disabled={Page<=1} className="btn btn-dark"onClick={handlePrevClick}>&larr;Previous</button>
            <button type="button" disabled={Page+1>Math.ceil(totalResults/props.pageSize)}className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
          </div>
        </div>
        </div>
     
    )
}
News.propTypes={country:propTypes.string,pageSize:propTypes.number,category:propTypes.string};
News.defaultProps={country:"in",category:"general",pageSize:6};