import React from "react";
import { render, screen } from "@testing-library/react";

import ContextPage from "../ContextPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders context page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ContextPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("context-datatable")).toBeInTheDocument();
    expect(screen.getByRole("context-add-button")).toBeInTheDocument();
});
