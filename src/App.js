import React, { useMemo } from 'react'
import { Center } from './rootStyle'
import Table from './Table'
// import integration from './data/integration.json'
import inventory from './data/inventory.json'
import Tooltip from './Tooltip'
export default function App() {
    // const integrationColumn = useMemo(
    //     () => Object.keys(integration[0]).map(key => ({ Header: key, accessor: key })),
    //     []
    // )
    // const integrationData = useMemo(
    //     () => [...integration.slice(0, 20)],
    //     []
    // )

    const inventoryColumn = useMemo(
        () => [
            {
                Header: 'id',
                accessor: 'id'
            },
            {
                Header: 'name',
                accessor: 'name'
            },
            {
                Header: 'Sys Owner',
                accessor: (row)=> row.SysOwners.map(i=>i.name).join(),
                Cell: ({cell})=> <Tooltip>{cell.value}</Tooltip>
            }
        ],
        []
    )
    const inventoryData = useMemo(
        () => [...inventory.slice(0,1),inventory.find(i=>i.id===121),...inventory.slice(0,10)],
        []
    )

    // console.log(inventoryColumn)


    return (
        <>
            {/* <Center>
                <div>
                    <Table
                        columns={integrationColumn}
                        data={integrationData}
                    />
                </div>
            </Center> */}
            <Center>
                <div>
                    <Table
                        columns={inventoryColumn}
                        data={inventoryData}
                    />
                </div>
            </Center>
        </>
    )
}
