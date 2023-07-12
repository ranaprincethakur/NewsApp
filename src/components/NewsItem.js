import React from 'react';
// import propTypes from 'prop-types';
export default function NewsItem(props){
    return(
        <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title.length>=44?`${props.title.slice(0,44)}...`:props.title}</h5>
            <p className="card-text">{props.description.length>=88?`${props.description.slice(0,88)}...`:props.description}</p>
            <a href={props.newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    )
}