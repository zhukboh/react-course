import {Waiter} from "../types";

const URL = 'http://localhost:4000/waiters/';

export class WaiterApi {
    static getList(): Promise<Waiter[]> {
        return fetch(URL).then(response => response.json());
    }

    static create(waiter: Waiter): Promise<Waiter> {
        return fetch(URL, {
            method: 'POST',
            body: JSON.stringify(waiter),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }

    static update(waiter: Waiter): Promise<Waiter> {
        return fetch(URL + '/' + waiter.id, {
            method: 'PUT',
            body: JSON.stringify(waiter),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }

    static delete(waiter: Waiter): Promise<Waiter> {
        return fetch(URL + '/' + waiter.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }


}
