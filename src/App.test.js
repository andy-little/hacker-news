import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
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

describe("pagination", () => {
    test("page one should not render previous button", async () => {
        render(<WrappedApp />);
        await waitFor(() => {
            const prevBtn = screen.queryByText(/previous page/i);
            expect(prevBtn).not.toBeInTheDocument();
        });
    });
    test("page one should render next button", async () => {
        render(<WrappedApp />);
        await waitFor(() => {
            const nextBtn = screen.getByRole("button", { name: /next page/i });
            expect(nextBtn).toBeInTheDocument();
        });
    });
});
