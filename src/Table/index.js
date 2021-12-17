import React from 'react'
// import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeadCell } from '../styledTable'
import * as ST from '../styledTable'
import { TableHead, TableRow } from './components'
import useSortBy from './hooks/useSortBy'
import useTable from './hooks/useTable'
export default function Table({ columns, data, options }) {
    const {
        headers,
        body,
        selectedSort,
        isSortToggle
    } = useTable({ columns, data, options }, useSortBy)
    // console.log(body)
    return (
        <>
<button onClick={()=>selectedSort('number')('ASC')}>numberASC</button>
<button onClick={()=>selectedSort('number')('DESC')}>desc</button>
<button onClick={()=>selectedSort('number')('RESET')}>RESET</button>
<button onClick={()=>isSortToggle('number')}>toggle</button>
            <ST.Table>
                <TableHead>
                    <TableRow>
                        {headers.map(({ name, headCellProps }) => <ST.TableCell {...headCellProps}>{name}</ST.TableCell>)}
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
        </>
    )

}
