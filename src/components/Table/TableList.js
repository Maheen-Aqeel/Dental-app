import React, { useState } from 'react';
import { Edit, Visibility, Delete } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import './tableList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TableSortLabel } from '@mui/material';


function TableList() {
    const [rows, setRows] = useState([
    { id: 1, policy:"pl_0f192662_f6b", name: "Avengers Marvel", phone: "032163" , email: "Jamalhashmi@yahoo.com", registration_date: "02-Mar-2023", status:"Activated", expiry_date:"04-Mar-2024" },
    { id: 2, policy:"pl_0f192662_f6b", name: "Avengers Marvel", phone: "032163" , email: "Jamalhashmi@yahoo.com", registration_date: "2023-03-02", status:"Activated", expiry_date:"2024-03-04" },
    { id: 3, policy:"pl_0f192663_f6c", name: "Harry Potter", phone: "032164" , email: "harrypotter@yahoo.com", registration_date: "2023-03-01", status:"Activated", expiry_date:"2024-03-03" },
    { id: 4, policy:"pl_0f192664_f6d", name: "Jon Snow", phone: "032165" , email: "jonsnow@yahoo.com", registration_date: "2023-03-03", status:"Deactivated", expiry_date:"2024-03-05" },
    { id: 5, policy:"pl_0f192665_f6e", name: "John Wick", phone: "032166" , email: "johnwick@yahoo.com", registration_date: "2023-03-04", status:"Activated", expiry_date:"2024-03-06" },
    { id: 6, policy:"pl_0f192666_f6f", name: "Sherlock Holmes", phone: "032167" , email: "sherlockholmes@yahoo.com", registration_date: "2023-03-05", status:"Deactivated", expiry_date:"2024-03-07" },
    { id: 7, policy:"pl_0f192667_f6g", name: "Tony Stark", phone: "032168" , email: "tonystark@yahoo.com", registration_date: "2023-03-06", status:"Activated", expiry_date:"2024-03-08" },
    { id: 8, policy:"pl_0f192668_f6h", name: "Bruce Wayne", phone: "032169" , email: "brucewayne@yahoo.com", registration_date: "2023-03-07", status:"Deactivated", expiry_date:"2024-03-09" },
    { id: 9, policy:"pl_0f192669_f6i", name: "Jason Bourne", phone: "032170" , email: "jasonbourne@yahoo.com", registration_date: "2023-03-08", status:"Activated", expiry_date:"2024-03-10" },
    { id: 10, policy:"pl_0f192670_f6j", name: "Natasha Romanoff", phone: "032171" , email: "natasharomanoff@yahoo.com", registration_date: "2023-03-09", status:"Deactivated", expiry_date:"2024-03-11" },
    { id: 11, policy:"pl_0f192671_f6k", name: "Ethan Hunt", phone: "032172" , email: "ethanhunt@yahoo.com", registration_date: "2023-03-10", status:"Activated", expiry_date:"2024-03-11" },

        
      ]);
      const [editingRow, setEditingRow] = useState(null);
      const [viewingRow, setViewingRow] = useState(null);
      const [currentPage, setCurrentPage] = useState(1);
      const [sortColumn, setSortColumn] = useState(null);
      const [sortOrder, setSortOrder] = useState('asc');
      const itemsPerPage = 10;    
    
      const handleEdit = (row) => {
        setEditingRow(row);
      };
    
      const handleView = (row) => {
        setViewingRow(row);
      };
    
      const handleDelete = (row) => {
        const newRows = rows.filter((r) => r.id !== row.id);
        setRows(newRows);
      };
    
      const handleSave = (row) => {
        const newRows = rows.map((r) => (r.id === row.id ? row : r));
        setRows(newRows);
        setEditingRow(null);
      };
      
      const handlePageChange = ({ selectedPage }) => {
        setCurrentPage(selectedPage);
      };

      const handleSort = (column) => {
        if (sortColumn === column) {
          setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
          setSortColumn(column);
          setSortOrder('asc');
        }
      };

      const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const sortedRows = [...rows];
        if (sortColumn !== null) {
        sortedRows.sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return sortOrder === 'asc' ? -1 : 1;
            if (a[sortColumn] > b[sortColumn]) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
        }
        const currentData = sortedRows.slice(start, end);
        const npage = Math.ceil(rows.length/ itemsPerPage);
        const numbers = [...Array(npage + 1).keys()].slice(1)

  return (
    <>
    <div className="tablelist">
        <div className='table-container'>
            <table>
                <thead className='tableHead'>
                <tr>
                <th>
                      <TableSortLabel
                        active={sortColumn === 'policy'}
                        direction={sortOrder}
                        onClick={() => handleSort('policy')}
                      >
                        Policy#
                      </TableSortLabel>
                </th>
                <th>
                      <TableSortLabel
                        active={sortColumn === 'name'}
                        direction={sortOrder}
                        onClick={() => handleSort('name')}
                      >
                        Name
                      </TableSortLabel>
                </th>
                <th>
                      <TableSortLabel
                        active={sortColumn === 'phone'}
                        direction={sortOrder}
                        onClick={() => handleSort('phone')}
                      >
                        Phone
                      </TableSortLabel>
                </th>
                <th>
                      <TableSortLabel
                        active={sortColumn === 'email'}
                        direction={sortOrder}
                        onClick={() => handleSort('email')}
                      >
                        Email
                      </TableSortLabel>
                </th>
                <th>
                      <TableSortLabel
                        active={sortColumn === 'registration_date'}
                        direction={sortOrder}
                        onClick={() => handleSort('registration_date')}
                      >
                        Registration Date
                      </TableSortLabel>
                </th>
                <th>
                      <TableSortLabel
                        active={sortColumn === 'status'}
                        direction={sortOrder}
                        onClick={() => handleSort('status')}
                      >
                        Status
                      </TableSortLabel>
                </th>
                <th>
                      <TableSortLabel
                        active={sortColumn === 'xpiry_date'}
                        direction={sortOrder}
                        onClick={() => handleSort('xpiry_date')}
                      >
                        Expiry Date
                      </TableSortLabel>
                </th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>

                {currentData.map((row) => (
                    <tr key={row.id}>
                    {editingRow?.id === row.id ? (
                        <>
                        <td>
                            <input
                            type="text"
                            value={editingRow.policy}
                            onChange={(e) =>
                                setEditingRow({ ...editingRow, policy: e.target.value })
                            }
                            />
                        </td>
                        <td>
                            <input
                            type="text"
                            value={editingRow.name}
                            onChange={(e) =>
                                setEditingRow({ ...editingRow, name: e.target.value })
                            }
                            />
                        </td>
                        <td>
                            <input
                            type="number"
                            value={editingRow.phone}
                            onChange={(e) =>
                                setEditingRow({ ...editingRow, phone: e.target.value })
                            }
                            />
                        </td>
                        <td>
                            <input
                            type="text"
                            value={editingRow.email}
                            onChange={(e) =>
                                setEditingRow({ ...editingRow, email: e.target.value })
                            }
                            />
                        </td>
                        <td>
                            <input
                            type="date"
                            value={editingRow.registration_date}
                            onChange={(e) =>
                                setEditingRow({ ...editingRow, registration_date: e.target.value })
                            }
                            />
                        </td>
                        <td>
                            <input
                            type="text"
                            value={editingRow.status}
                            onChange={(e) =>
                                setEditingRow({ ...editingRow, status: e.target.value })
                            }
                            />
                        </td>
                        <td>
                            <input
                            type="date"
                            value={editingRow.expiry_date}
                            onChange={(e) =>
                                setEditingRow({ ...editingRow, expiry_date: e.target.value })
                            }
                            />
                        </td>
                        <td>
                            <button onClick={() => handleSave(editingRow)}>Save</button>
                        </td>
                        </>
                    ) : (
                        <>
                        <td>{row.policy}</td>
                        <td>{row.name}</td>
                        <td>{row.phone}</td>
                        <td>{row.email}</td>
                        <td>{row.registration_date}</td>
                        <td>{row.status}</td>
                        <td>{row.expiry_date}</td>
                        <td>
                            <IconButton aria-label="view" onClick={() => handleView(row)}>
                            <Visibility />
                            </IconButton>
                            <IconButton aria-label="edit" onClick={() => handleEdit(row)}>
                            <Edit />
                            </IconButton>
                            <IconButton aria-label="delete" onClick={() => handleDelete(row)}>
                            <Delete />
                            </IconButton>
                        </td>
                        </>
                    )}
                    </tr>
                ))}
                </tbody>
            </table>

            <nav>
                <ul className='pagination'>
                    <li className='page-item'>
                        <a href='#' className='page-link'
                        onClick={prePage}> Prev
                        </a>
                    </li>
                    {
                        numbers.map((n, i) => (
                            <li className= {`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <a href='#' className='page-link'
                                onClick={() => changeCPage(n)}> {n}
                                </a>
                            </li>
                        ))
                    }
                    <li className='page-item'>
                        <a href='#' className='page-link'
                        onClick={nextPage}> Next
                        </a>
                    </li>
                </ul>
            </nav>

            
            {viewingRow && (
                <div className="view-modal">
                <div className="view-modal-content">
                    <h2>{viewingRow.name}</h2>
                    <p>{viewingRow.email}</p>
                    <button onClick={() => setViewingRow(null)}>Close</button>
                </div>
                </div>
            )}

    </div>
</div>
    </>
  );
  function nextPage(){
    if(currentPage !== npage){
        setCurrentPage(currentPage + 1)
    }
  }
  function prePage(){
    if(currentPage !== 1){
        setCurrentPage(currentPage - 1)
    }
  }
  function changeCPage(id){
    setCurrentPage(id)
  }

}

export default TableList