import React from "react";
import { render, screen } from "@testing-library/react";

import BbroutingPage from "../BbroutingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders bbrouting page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BbroutingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("bbrouting-datatable")).toBeInTheDocument();
    expect(screen.getByRole("bbrouting-add-button")).toBeInTheDocument();
});
