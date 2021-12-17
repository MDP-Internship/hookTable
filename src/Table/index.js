import React from 'react'
// import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeadCell } from '../styledTable'
import * as ST from '../styledTable'
import { TableHead, TableRow } from './components'
import { sortTypeEnum } from './enum'
import useSortBy from './hooks/useSortBy'
import useTable from './hooks/useTable'
export default function Table({ columns, data, options }) {
    const {
        headers,
        body,
        sortToggle,
        sortState
    } = useTable({ columns, data, options }, useSortBy)

    const sortIcon = (sortToggle) => (name) => {
        // console.log(sortState ,name)
        if (sortState.sortColumnID === name)
            switch (sortToggle) {
                case sortTypeEnum.ASC:
                    return 'asc'
                case sortTypeEnum.DESC:
                    return 'desc'
                case sortTypeEnum.RESET:
                    return ""
                default: throw Error()
            }
    }

    return (
        <ST.Table>
            <TableHead>
                <TableRow>
                    {headers.map(({ name, headCellProps }) => <ST.TableCell {...headCellProps}>{name} {sortIcon(sortToggle)(name)} </ST.TableCell>)}
                </TableRow>
            </TableHead>
            <ST.TableBody>
                {
                    body.map((row, i) => <TableRow>
                        {Object.values(row).map(rowCell => <ST.TableCell >{rowCell}</ST.TableCell>)}
                    </TableRow>)
                }
            </ST.TableBody>
            <ST.TableFooter></ST.TableFooter>
        </ST.Table>
    )

}
