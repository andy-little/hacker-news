import React from "react";
import { useGlobalContext } from "../../../context";

const NextButton = ({ hasNext }) => {
    const { handlePage, page } = useGlobalContext();
    return (
        <div className="pagination-container">
            <button
                type="button"
                aria-label="next page"
                className="pagination-title"
                onClick={() => {
                    handlePage(page + 1);
                }}
            >
                <span className="colour-y">c</span>
                <span className="colour-b">k</span>
                <span className="colour-g">e</span>
                <span className="colour-r">r</span>
            </button>
            {hasNext && (
                <button
                    className="page-number word"
                    onClick={() => {
                        handlePage(page + 1);
                    }}
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default NextButton;
