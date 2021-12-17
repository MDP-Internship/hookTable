/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useReducer, useState } from "react"

export const sortTypeEnum = {
    DESC: 'DESC',
    ASC: 'ASC',
    RESET: 'RESET'
}

export default function useSortBy(data) {
    const [initData, setInitData] = useState([])
    const [sortToggle, setSortToggle] = useState(sortTypeEnum.RESET)

    useEffect(() => {
        setInitData([...data])
    }, [])

    const initalState = {
        data
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case sortTypeEnum.DESC:
                return { ...state, data: data.sort((a, b) => (a[action.name] < b[action.name]) ? 1 : ((b[action.name] < a[action.name]) ? -1 : 0)) }
            case sortTypeEnum.ASC:
                return { ...state, data: data.sort((a, b) => (a[action.name] > b[action.name]) ? 1 : ((b[action.name] > a[action.name]) ? -1 : 0)) }
            case sortTypeEnum.RESET:
                return { ...state, data: initData }
            default:
                return { ...state }
        }

    }

    const [sortState, dispatch] = useReducer(reducer, initalState)
    const selectedSort = useCallback((name) => (type) => dispatch({ name, type }), [dispatch]);

    const isSortToggle = useCallback((name) => {
        switch (sortToggle) {
            case sortTypeEnum.RESET:
                console.log('resettt')
                setSortToggle(sortTypeEnum.DESC)
                break;
            case sortTypeEnum.DESC:
                console.log('desccc')
                setSortToggle(sortTypeEnum.ASC)
                break;
            case sortTypeEnum.ASC:
                console.log('asccc')
                setSortToggle(sortTypeEnum.RESET)
                break;
            default: throw Error()
        }
        console.log(sortToggle)
        return selectedSort(name)(sortToggle);

    }, []);

    return {
        selectedSort,
        sortState,
        isSortToggle
    }
}
