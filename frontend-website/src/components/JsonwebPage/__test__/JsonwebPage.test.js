import React from "react";
import { render, screen } from "@testing-library/react";

import JsonwebPage from "../JsonwebPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders jsonweb page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <JsonwebPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("jsonweb-datatable")).toBeInTheDocument();
    expect(screen.getByRole("jsonweb-add-button")).toBeInTheDocument();
});
