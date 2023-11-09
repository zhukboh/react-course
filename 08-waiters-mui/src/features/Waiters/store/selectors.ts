import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../store";
import {FILTER} from "../constants";

export const listSelector = (state: RootState) => state.waiter.list
export const filterSelector = (state: RootState) => state.waiter.filter
export const editingWaiterSelector = (state: RootState) => state.waiter.editingWaiter
export const editingWaiterLoadingSelector = (state: RootState) => state.waiter.editingWaiterLoading
export const editingWaiterErrorSelector = (state: RootState) => state.waiter.editingWaiterError

export const editingWaiterCombinedSelector = createSelector(
    editingWaiterSelector,
    editingWaiterLoadingSelector,
    editingWaiterErrorSelector,
    (editingWaiter, editingWaiterLoading, editingWaiterError) => ({
        editingWaiter: editingWaiter,
        editingWaiterLoading: editingWaiterLoading,
        editingWaiterError: editingWaiterError,
    })
);

export const filteredWaiterListSelector = createSelector(
    listSelector,
    filterSelector,
    (list, filter) => {
        switch (filter) {
            case FILTER.NOT_A_LETTER:
                return list.filter((waiter) =>
                    waiter.firstName.toLowerCase().charCodeAt(0) < 'a'.charCodeAt(0)
                    || waiter.firstName.toLowerCase().charCodeAt(0) > 'z'.charCodeAt(0))
            case FILTER.CONTAINS_XXX:
                return list.filter((waiter) =>
                    waiter.firstName.toLowerCase().includes('xxx',0))
            default:
                return list
        }
    }
)
