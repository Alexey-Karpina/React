import React from 'react';
import {connect} from 'react-redux';
import {setVisibilityItems} from '../actions';

const Searcher = ({dispatch}) => {
    const onChange = (value) =>{
        if (value.length) {
            dispatch(setVisibilityItems(value));
            return;
        }
    }
    return(
        <div>
        <h3>Find contacts by name</h3>
        <input
          onChange={(e) => onChange(e.target.value)}
          type="text"
          placeholder="Type for search"
        />
      </div>
    );
};

export default connect()(Searcher);