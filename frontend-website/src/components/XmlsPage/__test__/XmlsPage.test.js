import React from "react";
import { render, screen } from "@testing-library/react";

import XmlsPage from "../XmlsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders xmls page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <XmlsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("xmls-datatable")).toBeInTheDocument();
    expect(screen.getByRole("xmls-add-button")).toBeInTheDocument();
});
