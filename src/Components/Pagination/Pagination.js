import React from "react";
import GoToPage from "./GoToPage";
import PrevButton from "./PrevBtn";
import NextButton from "./NextBtn";
import { useGlobalContext } from "../../context";

const Pagination = () => {
    const { page, numbPages, handlePage, loading } = useGlobalContext();
    const hasPrev = page > 0 ? true : false;
    const hasNext = page + 2 < numbPages - 1 ? true : false;

    if (!loading) {
        /* need to check json return to see if pages exists */
        return (
            <nav className="pagination">
                <PrevButton hasPrev={hasPrev} />

                {page - 2 > 0 && (
                    <GoToPage page={page - 2} cb={() => handlePage(page - 3)} />
                )}

                {page - 1 > 0 && (
                    <GoToPage page={page - 1} cb={() => handlePage(page - 2)} />
                )}

                {page > 0 && (
                    <GoToPage page={page} cb={() => handlePage(page - 1)} />
                )}

                <GoToPage isCurrent={true} page={page + 1} cb={null} />

                {page + 2 < numbPages - 1 && (
                    <GoToPage page={page + 2} cb={() => handlePage(page + 1)} />
                )}

                {page + 3 < numbPages - 1 && (
                    <GoToPage page={page + 3} cb={() => handlePage(page - 2)} />
                )}

                {page + 4 < numbPages - 1 && (
                    <GoToPage page={page + 4} cb={() => handlePage(page + 3)} />
                )}

                <NextButton hasNext={hasNext} page={page + 2} />
            </nav>
        );
    }
    return null;
};

export default Pagination;
