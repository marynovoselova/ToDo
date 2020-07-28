import React from "react";
import {FILTER_ALL, FILTER_ACTIVE, FILTER_DONE} from "../../const";
import './index.css';

const ItemStatusFilter = ({onClickFilter, selectedFilter}) => {
    const getClassNamesForButton = buttonFilterName => selectedFilter === buttonFilterName
        ? "btn btn-info"
        : "btn btn-outline-secondary";

    const renderButton = (buttonFilterName, title) => (
        <button type="button"
                className={getClassNamesForButton(buttonFilterName)}
                onClick={() => onClickFilter(buttonFilterName)}>{title}
        </button>
    );
    return (
        <div className="btn-group">
            {renderButton(FILTER_ALL, "All")}
            {renderButton(FILTER_ACTIVE, "Active")}
            {renderButton(FILTER_DONE, "Done")}
        </div>
    );
}

export default ItemStatusFilter;