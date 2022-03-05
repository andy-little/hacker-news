import React from "react";
import { useGlobalContext } from "../../context";
import { AiOutlineSearch } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const SearchForm = () => {
    const { query, handleSearch, clearSearch } = useGlobalContext();
    return (
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-container">
                <label htmlFor="search" aria-label="search"></label>
                <input
                    type="text"
                    placeholder="Search for Hacker News"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="form-input"
                    id="search"
                />
                {query && (
                    <RiCloseLine className="close-icon" onClick={clearSearch} />
                )}
                {query && <span className="divide"> | </span>}

                <AiOutlineSearch className="search-icon" />
            </div>
        </form>
    );
};

export default SearchForm;
