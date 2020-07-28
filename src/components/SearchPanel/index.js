import React from "react";
import './index.css';


const SearchPanel = ({onSearchPanel, value}) => {
    return (
        <input type="text"
               className="form-control search-input"
               onChange={onSearchPanel}
               placeholder="type to search"
               value={value}/>
    );
}

export default SearchPanel;