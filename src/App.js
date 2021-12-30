import React, { useMemo } from 'react'
import { Center } from './rootStyle'
import Table from './Table'
import integration from './data/integration.json'
export default function App() {
    const integrationColumn = useMemo(
        () => Object.keys(integration[0]).map(key => ({ Header: key, accessor: key })),
        []
    )
    const integrationData = useMemo(
        () => [...integration.slice(0, 20)],
        []
    )


    return (
        <>
            <Center>
                <div>
                    <Table
                        columns={integrationColumn}
                        data={integrationData}
                    />
                </div>
            </Center>
        </>
    )
}
