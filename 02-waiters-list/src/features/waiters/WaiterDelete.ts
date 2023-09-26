import {Waiter} from "./types";
import {WaiterApi} from "./api/WaiterApi";

interface WaiterDeleteProps {
    waiter: Waiter
}

export function DeleteWaiter({waiter}: WaiterDeleteProps) {
    WaiterApi.delete(waiter).then();
}