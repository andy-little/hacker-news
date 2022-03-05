import React from "react";
import { SearchForm, Stories, Pagination, Header } from "./Components/";
import { useGlobalContext } from "./context";

function App() {
    const { isResults } = useGlobalContext();

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
                <h2>no results found</h2>
            )}
        </>
    );
}

export default App;
