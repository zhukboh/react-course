import React from "react";
import {WaiterList} from "./WaiterList";
import {FormEdit} from "./FormEdit";
import {useWaiter} from "./hooks/useWaiter";

export function WaitersApp() {
    const {editingWaiter, waitersList, onWaiterSubmit, deleteWaiter, editWaiter} = useWaiter()

    return (
        <div>
            <FormEdit waiter={editingWaiter} onWaiterSubmit={onWaiterSubmit}/>
            <WaiterList list={waitersList} deleteWaiter={deleteWaiter} editWaiter={editWaiter}/>
        </div>
    );
}
