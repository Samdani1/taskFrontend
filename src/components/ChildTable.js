import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development';

const ChildTable = () => {
    let { parentId } = useParams();
    const [children, setChildren] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:8080/api/parents/${parentId}/children`)
        .then((response) => response.json())
        .then((data) => setChildren(data));
    }, [parentId]);
  
    return (
      <div className='container mt-4'>
        <h1 style={{ textAlign:'center' }}>Child Table</h1>
        <table className='table .table-bordered table-striped'>
            <thead className='table-dark'>
            <tr>
                <th>Child id</th>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Total Amount</th>
                <th>Paid Amount</th>
            </tr>
            </thead>
            <tbody>
            {children.map((child) => (
                <tr key={child.id}>
                <td>{child.id}</td>
                <td>{child.sender}</td>
                <td>{child.receiver}</td>
                <td>{child.totalAmount}</td>
                <td>{child.paidAmount}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    );
  };

export default ChildTable;