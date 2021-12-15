import React from 'react'
// import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeadCell } from '../styledTable'
import * as ST from '../styledTable'
import { TableHead, TableRow } from './components'
export default function TableView() {
    return (
        <ST.Table>
            <TableHead></TableHead>
            <ST.TableBody>
                <TableRow >
                    {
                        (number) => 
                        <>
                            <ST.TableCell>Deneme</ST.TableCell>
                        </>
                    }
                </TableRow>

            </ST.TableBody>
            <ST.TableFooter></ST.TableFooter>
        </ST.Table>
    )
}
