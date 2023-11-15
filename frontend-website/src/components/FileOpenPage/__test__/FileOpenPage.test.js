import React from "react";
import { render, screen } from "@testing-library/react";

import FileOpenPage from "../FileOpenPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders fileOpen page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FileOpenPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("fileOpen-datatable")).toBeInTheDocument();
    expect(screen.getByRole("fileOpen-add-button")).toBeInTheDocument();
});
