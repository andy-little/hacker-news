import React from "react";
import { useGlobalContext } from "../../context";

const PrevButton = ({ hasPrev }) => {
    const { handlePage, page } = useGlobalContext();
    if (hasPrev) {
        return (
            <div className="pagination-container">
                <button
                    type="button"
                    aria-label="previous page"
                    className="pagination-title colour-b"
                    onClick={() => {
                        handlePage(page - 1);
                    }}
                >
                    H
                </button>
                <button
                    className="page-number word"
                    onClick={() => {
                        handlePage(page - 1);
                    }}
                >
                    Previous
                </button>
            </div>
        );
    }
    return (
        <div className="pagination-container">
            <button
                className=" pagination-title colour-b"
                style={{ cursor: "initial" }}
            >
                H
            </button>
        </div>
    );
};

export default PrevButton;
