import React from "react";
import { render, screen } from "@testing-library/react";

import JsonwebCreateDialogComponent from "../JsonwebCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders jsonweb create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <JsonwebCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("jsonweb-create-dialog-component")).toBeInTheDocument();
});
