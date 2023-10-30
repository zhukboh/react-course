import {useSearchParams} from "react-router-dom";
import {FILTER} from "./constants";
import {useEffect} from "react";
import {setFilterAction} from "./store/reducer";
import {useDispatch} from "react-redux";

export function Filters() {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter')
    const setFilter = (val: FILTER) => setSearchParams(`filter=${val}`)

    useEffect(() => {
        if (filter) {
            dispatch(setFilterAction(filter as FILTER))
        }
    }, [filter])

    return (
        <div>
            <button onClick={() => setFilter(FILTER.ALL)}>All</button>
            <button onClick={() => setFilter(FILTER.NOT_A_LETTER)}>Starting with not a letter</button>
            <button onClick={() => setFilter(FILTER.CONTAINS_XXX)}>Contains XXX</button>
        </div>
    )
}
