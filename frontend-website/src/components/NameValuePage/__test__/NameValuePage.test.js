import React from "react";
import { render, screen } from "@testing-library/react";

import NameValuePage from "../NameValuePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders nameValue page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <NameValuePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("nameValue-datatable")).toBeInTheDocument();
    expect(screen.getByRole("nameValue-add-button")).toBeInTheDocument();
});
