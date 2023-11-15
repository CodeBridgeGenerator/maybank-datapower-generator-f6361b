import React from "react";
import { render, screen } from "@testing-library/react";

import GatewayPage from "../GatewayPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders gateway page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <GatewayPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("gateway-datatable")).toBeInTheDocument();
    expect(screen.getByRole("gateway-add-button")).toBeInTheDocument();
});
