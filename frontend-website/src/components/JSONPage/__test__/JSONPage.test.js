import React from "react";
import { render, screen } from "@testing-library/react";

import JSONPage from "../JSONPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders jSON page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <JSONPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("jSON-datatable")).toBeInTheDocument();
    expect(screen.getByRole("jSON-add-button")).toBeInTheDocument();
});
