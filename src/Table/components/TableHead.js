import React from 'react'
import * as ST from '../../styledTable'
export default function TableHead() {
    return (
        <ST.TableHead >
            <ST.TableRow>
                <ST.TableHeadCell colSpan={1}>Sender Components</ST.TableHeadCell>
                <ST.TableCell>Sender Interface</ST.TableCell>
                <ST.TableCell>Receiver Components</ST.TableCell>
                <ST.TableCell>Receiver Interface</ST.TableCell>
            </ST.TableRow>
        </ST.TableHead>
    )
}
