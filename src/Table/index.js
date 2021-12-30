import React from 'react'
import { useTable } from 'react-table'
import integration from '../data/integration.json'


export default function Table() {

  

  const data = React.useMemo(
    () => [...integration.slice(0,20)],
    []
  )

  const columns = React.useMemo(
    () => Object.keys(integration[0]).map(key => ({ Header: key, accessor: key })),
    []
  )

  console.log(columns)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  // console.log(integration.splice(0,1)[0])
  // id: 3
  // isRemoved: 0
  // receiver_component: "Sevinç Manufacturing"
  // receiver_id: 4
  // receiver_interface: "Sevinterface"
  // receiver_namespace: "sevsev58"
  // sender_component: "Yılmazer Hediyelik"
  // sender_id: 3
  // sender_interface: "Yilmazergift"
  // sender_namespace: "yilmazerspacex"
  return (
    <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{border:'1px solid gray'}}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
