import React from "react";
import Button from "./Button";
import PrevButton from "./PrevBtn";
import NextButton from "./NextBtn";
import { useGlobalContext } from "../../context";

const Buttons = () => {
    const { page, numbPages, handlePage, loading } = useGlobalContext();
    const hasPrev = page > 0 ? true : false;
    const hasNext = page + 2 < numbPages - 1 ? true : false;

    if (!loading) {
        return (
            <nav className="pagination">
                <PrevButton hasPrev={hasPrev} />

                {page - 2 > 0 && (
                    <Button page={page - 2} cb={() => handlePage(page - 3)} />
                )}

                {page - 1 > 0 && (
                    <Button page={page - 1} cb={() => handlePage(page - 2)} />
                )}

                {page > 0 && (
                    <Button page={page} cb={() => handlePage(page - 1)} />
                )}

                <Button isCurrent={true} page={page + 1} cb={null} />

                {page + 2 < numbPages - 1 && (
                    <Button page={page + 2} cb={() => handlePage(page + 1)} />
                )}

                {page + 3 < numbPages - 1 && (
                    <Button page={page + 3} cb={() => handlePage(page - 2)} />
                )}

                {page + 4 < numbPages - 1 && (
                    <Button page={page + 4} cb={() => handlePage(page + 3)} />
                )}

                <NextButton hasNext={hasNext} page={page + 2} />
            </nav>
        );
    }
    return null;
};

export default Buttons;
