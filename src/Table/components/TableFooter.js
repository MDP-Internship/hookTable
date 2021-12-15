import React from 'react'
import * as ST from '../../styledTable'
export default function TableFooter() {
    return (
        <ST.TableFooter>
            <ST.TableRow>
                <ST.TableHeadCell colspan="2">Total albums</ST.TableHeadCell>
                <ST.TableCell colspan="2">77</ST.TableCell>
            </ST.TableRow>
        </ST.TableFooter>
    )
}
