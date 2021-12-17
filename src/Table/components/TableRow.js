import React from 'react'
import * as ST from '../../styledTable'

export default function TableRow({children}) {
    return (
            <ST.TableRow>
                {children}
            </ST.TableRow>
    )
}
