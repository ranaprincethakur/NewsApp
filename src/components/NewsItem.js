import React from 'react';
// import propTypes from 'prop-types';
export default function NewsItem(props){
    return(
        <div className="my-3">
        <div className="card">
          <img src={props.imageUrl===null?'https://talksport.com/wp-content/uploads/sites/5/2023/07/PM-TALKSPORT-Blog-8th-July-AM.jpg?strip=all&quality=100&w=1500&h=1000&crop=1':props.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title.length>=44?`${props.title.slice(0,44)}...`:props.title}</h5>
            <p className="card-text">{props.description.length>=88?`${props.description.slice(0,88)}...`:props.description}</p>
            <a href={props.newsUrl} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    )
}