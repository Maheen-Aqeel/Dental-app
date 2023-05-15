import React, { useState } from 'react';
import { Edit, Delete } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import TabPage from '../../components/Tabs/TabPage';
import TabFooter from '../../components/Tabs/TabFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TableSortLabel } from '@mui/material';
import './userSetup.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function UserSetup() {
    const [activeTab, setActiveTab] = useState(0);
  
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
        const [rows, setRows] = useState([
            { id: 1, nameofUser:"administrator", loginId: "dentalligence.admin@ztrategize.com", password: "****" , status:"Activated" },
            { id: 1, nameofUser:"administrator", loginId: "jamalhashmi@yahoo.com", password: "****" , status:"Activated" },
        ]);

        const [editingRow, setEditingRow] = useState(null);
        const [sortColumn, setSortColumn] = useState(null);
        const [sortOrder, setSortOrder] = useState('asc'); 

        const handleEdit = (row) => {
            setEditingRow(row);
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
    
          const handleSort = (column) => {
            if (sortColumn === column) {
              setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
            } else {
              setSortColumn(column);
              setSortOrder('asc');
            }
          };
            const sortedRows = [...rows];
            if (sortColumn !== null) {
            sortedRows.sort((a, b) => {
                if (a[sortColumn] < b[sortColumn]) return sortOrder === 'asc' ? -1 : 1;
                if (a[sortColumn] > b[sortColumn]) return sortOrder === 'asc' ? 1 : -1;
                return 0;
            });
        }
        
    return (
    <>
    <div className='user_page'>
    <TabPage />
    
    <div className="user_list">
    <button className={`user_btn ${activeTab === 0 && 'active'}`} onClick={() => handleTabClick(0)}> <AddCircleOutlineIcon /> Create a New User</button>
        <div className='user_container'>
            <table>
                <thead className='userHead'>
                    <tr>
                        <th>
                            <TableSortLabel
                                active={sortColumn === 'nameofUser'}
                                direction={sortOrder}
                                onClick={() => handleSort('nameofUser')}
                            >
                                Name of User
                            </TableSortLabel>
                        </th>
                        <th>
                            <TableSortLabel
                                active={sortColumn === 'loginId'}
                                direction={sortOrder}
                                onClick={() => handleSort('loginId')}
                            >
                                Login ID
                            </TableSortLabel>
                        </th>
                        <th>
                            <TableSortLabel
                                active={sortColumn === 'password'}
                                direction={sortOrder}
                                onClick={() => handleSort('password')}
                            >
                                Password
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
                            <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                {rows.map((row) => (
                    <tr key={row.id}>
                    {editingRow?.id === row.id ? (
                        <>
                        <td>
                            <input
                            type="text"
                            value={editingRow.nameofUser}
                            onChange={(e) =>
                                setEditingRow({ ...editingRow, nameofUser: e.target.value })
                            }
                            />
                        </td>
                        <td>
                            <input
                            type="email"
                            value={editingRow.loginId}
                            onChange={(e) =>
                                setEditingRow({ ...editingRow, loginId: e.target.value })
                            }
                            />
                        </td>
                        <td>
                            <input
                            type="password"
                            value={editingRow.password}
                            onChange={(e) =>
                                setEditingRow({ ...editingRow, password: e.target.value })
                            }
                            />
                        </td>
                        <td>
                            <input
                            type="text"
                            value={editingRow.status}
                            onChange={(e) =>
                                setEditingRow({ ...editingRow, status: e.target.disabled })
                            }
                            />
                        </td>
                        <td>
                            <button onClick={() => handleSave(editingRow)}>Save</button>
                        </td>
                        </>
                    ) : (
                        <>
                        <td>{row.nameofUser}</td>
                        <td>{row.loginId}</td>
                        <td>{row.password}</td>
                        <td>{row.status}</td>
                        <td>
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
    </div>
</div>

    <TabFooter />
    </div>
    </>
  );
}

export default UserSetup