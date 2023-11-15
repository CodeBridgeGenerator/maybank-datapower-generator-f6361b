import React from "react";
import { render, screen } from "@testing-library/react";

import FileOpenCreateDialogComponent from "../FileOpenCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders fileOpen create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FileOpenCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("fileOpen-create-dialog-component")).toBeInTheDocument();
});
