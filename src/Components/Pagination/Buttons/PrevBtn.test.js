import React from "react";
import { screen, render } from "@testing-library/react";
import Navigation from "./Navigation";
import { AppProvider } from "../../../context";

const WrappedNavigation = () => {
    return (
        <AppProvider>
            <Navigation></Navigation>
        </AppProvider>
    );
};

test("page one should not render previous button", () => {
    render(<WrappedNavigation />);
    expect(screen.queryByText(/previous/i)).not.toBeInTheDocument();
});
