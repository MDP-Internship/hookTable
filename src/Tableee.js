import React from 'react'
import { Center } from './rootStyle'
// import { Center } from './rootStyle'
import { Table, TableHeadCell, TableHead, TableRow, TableCell, TableFooter, TableBody } from './styledTable'
export default function TableGrid() {
    return (
        <Center style={{ padding: '10px' }}>
            <Table>
                <TableHead >
                    <TableRow>
                        <TableHeadCell colSpan={1}>Sender Components</TableHeadCell>
                        <TableCell>Sender Interface</TableCell>
                        <TableCell>Receiver Components</TableCell>
                        <TableCell>Receiver Interface</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow>
                        <TableCell>Buzzcocks</TableCell>
                        <TableCell>1976</TableCell>
                        <TableCell>9</TableCell>
                        <TableCell>Ever fallen in love (with someone you shouldn't've)</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>The Clash</TableCell>
                        <TableCell>1976</TableCell>
                        <TableCell>6</TableCell>
                        <TableCell>London Calling</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>The STableRowanglers</TableCell>
                        <TableCell>1974</TableCell>
                        <TableCell>17</TableCell>
                        <TableCell>No More Heroes</TableCell>
                    </TableRow>

                </TableBody>
                <TableFooter>

                    <TableRow>
                        <TableHeadCell colspan="2">Total albums</TableHeadCell>
                        <TableCell colspan="2">77</TableCell>
                    </TableRow>

                </TableFooter>
            </Table>
        </Center>
    )
}
