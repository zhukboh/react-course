import {useSearchParams} from "react-router-dom";
import {FILTER} from "../constants";
import {useEffect} from "react";
import {setFilterAction} from "../store/reducer";
import {useDispatch, useSelector} from "react-redux";
import Button from '@mui/material/Button';
import {ButtonGroup} from "@mui/material";
import {filterSelector} from "../store/selectors";

export function Filters() {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter')
    const selectedFilter = useSelector(filterSelector)
    const setFilter = (val: FILTER) => setSearchParams(`filter=${val}`)
    const isActive = (val: FILTER) => val === selectedFilter

    useEffect(() => {
        if (filter) {
            dispatch(setFilterAction(filter as FILTER))
        }
    }, [filter])

    return (
        <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
            <Button disabled={isActive(FILTER.ALL)} onClick={() => setFilter(FILTER.ALL)}>All</Button>
            <Button disabled={isActive(FILTER.NOT_A_LETTER)} onClick={() => setFilter(FILTER.NOT_A_LETTER)}>Starting with not a letter</Button>
            <Button disabled={isActive(FILTER.CONTAINS_XXX)} onClick={() => setFilter(FILTER.CONTAINS_XXX)}>Contains XXX</Button>
        </ButtonGroup>
    )
}
