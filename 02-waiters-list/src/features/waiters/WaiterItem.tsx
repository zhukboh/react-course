import {Waiter} from "./types";

interface WaiterItemProps {
    waiter: Waiter
    onRowDelete: (waiter: Waiter) => void
}

export function WaiterItem({waiter, onRowDelete}: WaiterItemProps) {
    return (
        <tr>
            <td>{waiter.id}</td>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
            <td>
                <button>Edit</button>
                <button onClick={() => onRowDelete(waiter)}>Delete</button>
            </td>
        </tr>
    )
}
