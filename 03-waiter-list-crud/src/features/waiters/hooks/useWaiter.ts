import React, {useCallback, useEffect} from "react";
import {WaiterI} from "../type";
import {WaiterApi} from "../api/server";

const DEFAULT_WAITER: WaiterI = {
    firstName: '',
    phone: '',
}

export function useWaiter() {
    const [editingWaiter, setEditingWaiter] = React.useState<WaiterI>(DEFAULT_WAITER)
    const [waitersList, setWaitersList] = React.useState<WaiterI[]>([])

    const getAll = useCallback(() => {
        WaiterApi.getAll().then((waiterList) => {
            setWaitersList(waiterList)
        })
    }, [])

    useEffect(() => {
        getAll()
    }, [getAll])

    const onWaiterSubmit = (waiter: WaiterI) => {
        if (waiter.id) {
            WaiterApi.update(waiter.id, waiter).then((updatedWaiter) => {
                setWaitersList(waitersList.map((waiter) => waiter.id === updatedWaiter.id ? updatedWaiter : waiter))
                setEditingWaiter(DEFAULT_WAITER)
            })
        } else {
            WaiterApi.create(waiter).then((newWaiter) => {
                setWaitersList([...waitersList, newWaiter])
                setEditingWaiter({...DEFAULT_WAITER})
            })
        }
    }

    const deleteWaiter = (id: number) => {
        WaiterApi.delete(id).then(() => {
            setWaitersList(waitersList.filter((waiter) => waiter.id !== id))
        })
    }

    const editWaiter = (waiter: WaiterI) => {
        setEditingWaiter(waiter)
    }

    return {
        editingWaiter,
        waitersList,
        onWaiterSubmit,
        deleteWaiter,
        editWaiter,
    }
}
