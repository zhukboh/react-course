import '@testing-library/jest-dom'
import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import {reducer as waiterReducer} from "../features/Waiters/store/reducer";

const AllTheProviders = ({children}: { children: React.ReactNode }) => {
    const store = configureStore({
        reducer: {
            waiter: waiterReducer,
        },
    })

    return (
        <Provider store={store}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Provider>
    );
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}