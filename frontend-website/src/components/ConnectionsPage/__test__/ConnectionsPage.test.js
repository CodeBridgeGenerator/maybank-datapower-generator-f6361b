import React from "react";
import { render, screen } from "@testing-library/react";

import ConnectionsPage from "../ConnectionsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders connections page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ConnectionsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("connections-datatable")).toBeInTheDocument();
    expect(screen.getByRole("connections-add-button")).toBeInTheDocument();
});
