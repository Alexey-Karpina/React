import React from "react";
import { connect } from "react-redux";
import { setVisibilityItems, VisibilityFilters } from "../../actions";

const Searcher = ({ dispatch }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        onChange={(e) => {
          if (e.target.value.length === 0) {
            dispatch(
              setVisibilityItems(e.target.value, VisibilityFilters.SHOW_ALL)
            );
            return;
          }
          dispatch(
            setVisibilityItems(e.target.value, VisibilityFilters.SHOW_SELECTED)
          );
        }}
        type="text"
        placeholder="Type for search"
      />
    </div>
  );
};

export default connect()(Searcher);
