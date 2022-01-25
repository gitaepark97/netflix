import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'

import './listList.css'
import { ListContext } from '../../context/listContext/ListContext'
import { deleteList, getLists } from '../../context/listContext/apiCalls'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

export default function ListList() {
  const { lists, dispatch } = useContext(ListContext)

  useEffect(() => {
    getLists(dispatch)
  }, [dispatch])

  const handleDelete = id => {
    deleteList(id, dispatch)
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    { field: 'title', headerName: 'title', width: 250 },
    { field: 'genre', headerName: 'genre', width: 150 },
    { field: 'type', headerName: 'type', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            <Link to={{ pathname: '/list/' + params.row._id, list: params.row }}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon className="productListDelete" onClick={() => handleDelete(params.row._id)} />
          </>
        )
      },
    },
  ]

  return (
    <div className="productList">
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={row => row._id}
      />
    </div>
  )
}
