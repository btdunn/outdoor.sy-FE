import { CSVReader } from 'react-papaparse';
import React from 'react'

const FileDropzone = ({ addCustomer }) => {


  const onFileLoad = (data) => {
    data.map((customer) => {
      return {
        first_name: customer.data[0],
        last_name: customer.data[1],
        email: customer.data[2],
        vehicle_type: customer.data[3],
        vehicle_name: customer.data[4],
        vehicle_length: customer.data[5],
      }
    }).forEach((customer) => addCustomer(customer))
  }

  return (
    <>
      <div className="file-upload-container">
        <CSVReader onFileLoad={onFileLoad} noClick>Drop a file here to add new customer</CSVReader>
      </div>
    </>
  )
}

export default FileDropzone;