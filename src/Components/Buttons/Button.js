import React from "react";

const Button = ({ isCurrent, page, cb }) => {
    const colour = isCurrent ? "colour-r" : "colour-y";
    return (
        <div className="pagination-container">
            <button
                type="button"
                aria-label={`page ${page}`}
                className={`pagination-title ${colour}`}
                onClick={cb}
            >
                a
            </button>
            <button
                className={`page-number numb-only ${
                    isCurrent && "page-current"
                }`}
                onClick={cb}
            >
                {page}
            </button>
        </div>
    );
};

export default Button;
