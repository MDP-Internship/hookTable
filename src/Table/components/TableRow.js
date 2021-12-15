import React from 'react'
import * as ST from '../../styledTable'

export default function TableRow({children}) {
    const data = [1,2,3,4,5]
    return (
            <ST.TableRow>
                {children(data)}
            </ST.TableRow>
    )
}
