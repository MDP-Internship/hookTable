/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useReducer, useState } from "react"
import { sortTypeEnum } from "../enum"


export default function useSortBy(data) {
    const [initData, setInitData] = useState([])
    const [sortToggle, setSortToggle] = useState(sortTypeEnum.RESET)

    useEffect(() => {
        setInitData([...data])
    }, [])

    const initalState = {
        data,
        sortColumnID: ""
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case sortTypeEnum.DESC:
                return { ...state, data: data.sort((a, b) => (a[action.name] < b[action.name]) ? 1 : ((b[action.name] < a[action.name]) ? -1 : 0)), sortColumnID: action.name }
            case sortTypeEnum.ASC:
                return { ...state, data: data.sort((a, b) => (a[action.name] > b[action.name]) ? 1 : ((b[action.name] > a[action.name]) ? -1 : 0)), sortColumnID: action.name }
            case sortTypeEnum.RESET:
                return { ...state, data: initData, sortColumnID: action.name }
            default:
                return { ...state }
        }

    }

    const [sortState, dispatch] = useReducer(reducer, initalState)
    const selectedSort = useCallback((name) => (type) => {console.log(type); dispatch({ name, type });}, [dispatch]);

    const isSortToggle = useCallback((name) => {
        switch (sortToggle) {
            case sortTypeEnum.ASC:
                setSortToggle(sortTypeEnum.DESC)
                selectedSort(name)(sortTypeEnum.DESC)
                break;
            case sortTypeEnum.DESC:
                setSortToggle(sortTypeEnum.RESET)
                selectedSort(name)(sortTypeEnum.RESET)
                break;
            case sortTypeEnum.RESET:
                setSortToggle(sortTypeEnum.ASC)
                selectedSort(name)(sortTypeEnum.ASC)
                break;
            default: throw Error()
        }
    }, [sortToggle]);


    return {
        sortState,
        isSortToggle,
        sortToggle
    }
}
