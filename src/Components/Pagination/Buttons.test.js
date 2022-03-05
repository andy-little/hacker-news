import React from "react";
import { screen, render } from "@testing-library/react";
import Buttons from "./Buttons";
import { AppProvider } from "../../context";

const WrappedButtons = () => {
    return (
        <AppProvider>
            <Buttons></Buttons>
        </AppProvider>
    );
};

test("page one should not render previous button", () => {
    render(<WrappedButtons />);
    expect(screen.queryByText(/previous/i)).not.toBeInTheDocument();
});
