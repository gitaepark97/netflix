import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'

import './movieList.css'
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls'
import { MovieContext } from '../../context/movieContext/MovieContext'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

export default function MovieList() {
  const { movies, dispatch } = useContext(MovieContext)

  useEffect(() => {
    getMovies(dispatch)
  }, [dispatch])

  const handleDelete = id => {
    deleteMovie(id, dispatch)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 200,
      renderCell: params => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        )
      },
    },
    { field: 'genre', headerName: 'Genre', width: 120 },
    { field: 'year', headerName: 'year', width: 120 },
    { field: 'limit', headerName: 'limit', width: 120 },
    { field: 'isSeries', headerName: 'isSeries', width: 120 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            <Link to={'/movie/' + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon className="productListDelete" onClick={() => handleDelete(params.row.id)} />
          </>
        )
      },
    },
  ]

  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={r => r._id}
      />
    </div>
  )
}
