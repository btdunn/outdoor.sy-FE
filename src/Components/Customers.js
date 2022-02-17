import CustomerTable from './CustomerTable'
import React from 'react'

const Customers = ({ customers }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'First name',
        accessor: 'first_name',
      },
      {
        Header: 'Last name',
        accessor: 'last_name'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Vehicle type',
        accessor: 'vehicle_type',
      },
      {
        Header: 'Vehicle name',
        accessor: 'vehicle_name',
      },
      {
        Header: 'Vehicle length',
        accessor: 'vehicle_length',
      },
    ],
    []
  )

  const data = React.useMemo(() => customers, [customers])

  return (
    <div className="table-align">
      <CustomerTable columns={columns} data={data} />
    </div>
  )
}

export default Customers