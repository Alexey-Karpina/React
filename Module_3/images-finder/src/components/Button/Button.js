import React from 'react';

const Button = ({onLoadMoreClick = () => {}}) => {
        return <button className="Button" onClick={() => onLoadMoreClick()}>Load More</button>
}
export default Button;