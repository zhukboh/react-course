import {Waiter} from "./types";
import {WaiterItem} from "./WaiterItem";

interface WaiterListProps {
    list: Waiter[];
    onRowDelete: (waiter: Waiter) => void
}

export function WaiterList({ list, onRowDelete }: WaiterListProps) {
    return (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {list.map((waiter) => <WaiterItem onRowDelete={onRowDelete} waiter={waiter} key={waiter.id} />)}
            </tbody>
        </table>
    );
}
