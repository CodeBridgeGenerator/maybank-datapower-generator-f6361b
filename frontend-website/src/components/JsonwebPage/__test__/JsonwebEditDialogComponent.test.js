import React from "react";
import { render, screen } from "@testing-library/react";

import JsonwebEditDialogComponent from "../JsonwebEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders jsonweb edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <JsonwebEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("jsonweb-edit-dialog-component")).toBeInTheDocument();
});
