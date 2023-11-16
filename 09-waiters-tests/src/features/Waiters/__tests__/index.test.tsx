import React from "react";
import {act, render, screen, waitForElementToBeRemoved} from "../../../utils/test-utils";
import userEvent from '@testing-library/user-event'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {URL} from "../api/server";
import {WaitersApp} from "../index";

const HEADER_COUNT = 1;
const mockedWaiters = [
    {
        "id": 1,
        "firstName": "Win",
        "phone": "123-456-789"
    },
    {
        "id": 2,
        "firstName": "Unix",
        "phone": "987-654-321"
    },
    {
        "id": 3,
        "firstName": "Macos",
        "phone": "111-222-333"
    },
    {
        "id": 4,
        "firstName": "XXX",
        "phone": "666-666-666"
    },
    {
        "id": 5,
        "firstName": "_wow_",
        "phone": "333-333-333"
    },
    {
        "id": 6,
        "firstName": "1_4_all",
        "phone": "999-999-999"
    }
]

export const handlers = [
    rest.get(URL, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mockedWaiters),
        )
    }),
]

const server = setupServer(...handlers)

describe('<WaitersApp/>', () => {
    // Enable API mocking before tests.
    beforeAll(() => server.listen())

    // Disable API mocking after the tests are done.
    afterAll(() => server.close())

    // Reset any runtime request handlers we may add during the tests.
    afterEach(() => server.resetHandlers())

    it('should render table with rows', async () => {
        render(<WaitersApp/>);

        await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

        const rows = screen.getAllByRole('row');

        expect(rows).toHaveLength(mockedWaiters.length + HEADER_COUNT);
    });

    it('should filter elements when "Contains XXX" button is clicked', async () => {
        render(<WaitersApp/>);
        await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

        const activeBtn = screen.getByRole('button', {name: 'Contains XXX'});

        await act(async () => {
            await userEvent.click(activeBtn);
        });

        const rows = screen.getAllByRole('row');

        expect(rows).toHaveLength(1 + HEADER_COUNT);
    });

    it('should filter elements when "Starting with not a letter" button is clicked', async () => {
        render(<WaitersApp/>);
        await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

        const activeBtn = screen.getByRole('button', {name: /Starting with not a letter/i});

        await act(async () => {
            await userEvent.click(activeBtn);
        });

        const rows = screen.getAllByRole('row');

        expect(rows).toHaveLength(2 + HEADER_COUNT);
    });
});
