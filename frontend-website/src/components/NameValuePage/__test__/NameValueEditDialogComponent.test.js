import React from "react";
import { render, screen } from "@testing-library/react";

import NameValueEditDialogComponent from "../NameValueEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders nameValue edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <NameValueEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("nameValue-edit-dialog-component")).toBeInTheDocument();
});
