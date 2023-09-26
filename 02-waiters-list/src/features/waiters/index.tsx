import React from "react";
import {Waiter} from "./types";
import {WaiterList} from "./WaiterList";
import {WaiterApi} from "./api/WaiterApi";
import {WaiterFormEdit} from "./WaiterFormEdit";

export function WaiterApp() {
    const [list, setList] = React.useState<Waiter[]>([])

    React.useEffect(() => {
        WaiterApi.getList().then((waiterList) => {
            setList(waiterList)
        })
    }, [])

    const onWaiterSubmit = (waiter: Waiter) => {
        WaiterApi.create(waiter).then((newWaiter) => {
            setList([...list, newWaiter])
        })
    }

    return (
        <div>
            <WaiterFormEdit onWaiterSubmit={onWaiterSubmit} />
            <WaiterList list={list} />
        </div>
    );
}