import {Waiter} from "./types";
import {WaiterItem} from "./WaiterItem";

interface WaiterListProps {
    list: Waiter[];
}

export function WaiterList({ list }: WaiterListProps) {
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
            {list.map((waiter) => <WaiterItem waiter={waiter} key={waiter.id} />)}
            </tbody>
        </table>
    );
}
