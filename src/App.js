import './App.css';

import React, { useEffect } from 'react'

import Customers from './Components/Customers';
import FileDropzone from './Components/FileDropzone';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/customers'

const App = () => {
  const [customers, setCustomers] = React.useState([])

  useEffect(() => {
    axios.get(apiUrl)
    .then(response => {
      setCustomers(response.data)
    })
  }, [])

  const addCustomer = (customer) => {
    axios.post(apiUrl, customer)
    .then(response => {
        setCustomers([...customers, response.data])
      })
  }


  return (
    <>
      <header className="header">
        Outdoor.sy
      </header>
      <FileDropzone addCustomer={addCustomer} />
      <Customers customers={customers} />
    </>
  );
}

export default App;
