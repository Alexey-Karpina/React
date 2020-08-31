import React from "react";

const MovieItem = ({ id, title, onItemClick }) => {
    return(
        <li key={id} className='HomePageItem' onClick={onItemClick}>
           <a href="#" className="MovieItem__link"> {title}</a>
        </li>
    )
}
export default MovieItem;
