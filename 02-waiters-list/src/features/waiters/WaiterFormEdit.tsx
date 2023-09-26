import {Waiter} from "./types";
import React from "react";

interface FormEditProps {
    onWaiterSubmit: (waiter: Waiter) => void;
}

export function WaiterFormEdit({ onWaiterSubmit }: FormEditProps) {
    const [firstName, setFirstName] = React.useState('')
    const [phone, setPhone] = React.useState('')

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        onWaiterSubmit({
            firstName,
            phone,
        })

        setFirstName('')
        setPhone('')
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="waiterFirstName">Name</label>
                <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" id="waiterFirstName" />
            </div>

            <div>
                <label htmlFor="waiterPhone">Phone</label>
                <input value={phone} onChange={e => setPhone(e.target.value)} type="text" id="waiterPhone" />
            </div>

            <button type="submit">Add waiter</button>
        </form>
    )
}
