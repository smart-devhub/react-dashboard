import React from 'react';
import './userlist.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { UserListData } from '../dummyData';

import { Link } from 'react-router-dom';

const UserList = () => {
    
    const [data,setData]=React.useState(UserListData)
    

    const deleteData=(id)=>{
        setData(data.filter(item=>item.id !== id))

    }

    const columns = [

        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 160,renderCell:(params)=>{
            return (
                <div className='userInfo'>
                      <img src={params.row.avatar} alt="" />
                      {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transactions',
          width: 160,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 160,
            renderCell:(params)=>{
                return (
                    <>
                  <Link to={"/user/"+params.row.id}><button type='button' className='EditButton'>Edit</button></Link>
                    <DeleteOutline className='deleteIcon' onClick={()=>deleteData(params.row.id)}/>
                    </>
                )
            }
          },
        
      ];
      
      
  return (
      <div className='userlist'>
       <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        checkboxSelection
      />
      </div>
  )
};

export default UserList;
