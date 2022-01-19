import axios from 'axios'

import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from './MovieActions'

export const getMovies = async dispatch => {
  dispatch(getMoviesStart())
  try {
    const res = await axios.get('api/movies', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    })
    dispatch(getMoviesSuccess(res.data))
  } catch (err) {
    dispatch(getMoviesFailure())
  }
}

export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart())
  try {
    const res = await axios.post('api/movies', movie, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    })
    dispatch(createMovieSuccess(res.data))
  } catch (err) {
    dispatch(createMovieFailure())
  }
}

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart())
  try {
    const res = await axios.post('api/movie/' + id, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    })
    dispatch(deleteMovieSuccess(res.data))
  } catch (err) {
    dispatch(deleteMovieFailure())
  }
}
