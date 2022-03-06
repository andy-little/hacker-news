import React from "react";
import { SearchForm, Stories, Pagination, Header } from "./Components/";
import { useGlobalContext } from "./context";
import { mockedData } from "./mockedData";

function App() {
    const { isResults } = useGlobalContext();
    console.log(mockedData);
    return (
        <>
            <Header />
            <SearchForm />
            {isResults ? (
                <>
                    <Stories />
                    <Pagination />
                </>
            ) : (
                <h2 className="no-results">no results found</h2>
            )}
        </>
    );
}

export default App;
