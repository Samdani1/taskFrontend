import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../store/reducers/actions/pageSlice';

export const selectedPanrent = createContext();

function ParentTable() {
  const [data, setData] = useState([]);
  //const [page, setPage] = useState(1);
  let navigate = useNavigate();
  const page = useSelector(state => state.page.current);
  const dispatch = useDispatch();

  const pageSize = 2;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8080/api/parents?page=${page}`);
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, [page]);

  function handlePrevPage() {
    if (page > 1) {
        dispatch(setPage(page - 1));
    }
  }

  function handleNextPage() {
    dispatch(setPage(page + 1));
  }

  function handleSortById() {
    const sortedData = [...data].sort((a, b) => a.id - b.id);
    setData(sortedData);
  }

  function ShowChildTable(id) {
    navigate(`/parents/${id}`);
  }

  return (
    <div className='container mt-4'>
        <h1 style={{ textAlign:'center' }}>Parent Table</h1>
      <table className='table .table-bordered table-striped'>
        <thead className='table-dark'>
          <tr>
            <th onClick={handleSortById}>Parent id</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Total Amount</th>
            <th>Total Paid Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map(parent => (
            <tr key={parent.id}>
              <td>{parent.id}</td>
              <td>{parent.sender}</td>
              <td>{parent.receiver}</td>
              <td>{parent.totalAmount}</td>
              <td onClick={()=>ShowChildTable(parent.id)}>{parent.totalPaidAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display:'flex', justifyContent:'space-between', padding:'10px' }}>
        <button type='button' className='btn btn-secondary' onClick={handlePrevPage} disabled={page === 1}>Previous</button>
        <button type='button' className='btn btn-secondary' onClick={handleNextPage} disabled={data.length < pageSize}>Next</button>
      </div>
    </div>
  );
}

export default ParentTable;