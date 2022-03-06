import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";
import { AppProvider } from "./context";

const WrappedApp = () => {
    return (
        <AppProvider>
            <App></App>
        </AppProvider>
    );
};

describe("heading", () => {
    test("should be in the document", () => {
        render(<WrappedApp />);
        const header = screen.getByRole("heading", {
            name: /hacker news logo/i,
        });
        expect(header).toBeInTheDocument();
    });
});

test("page one should not render previous button", () => {
    render(<WrappedApp />);
    const prevBtn = screen.queryByText(/previous/i);
    expect(prevBtn).toBeNull();

    //expect(prevBtn).toBeInTheDocument();
});
