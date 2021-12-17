import React from 'react'
import * as ST from '../../styledTable'
export default function TableHead({children}) {
    return (
        <ST.TableHead >
           {children}
        </ST.TableHead>
    )
}
