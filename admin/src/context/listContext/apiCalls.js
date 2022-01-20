import axios from 'axios'

import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from './ListActions'

export const getLists = async dispatch => {
  dispatch(getListsStart())
  try {
    const res = await axios.get('api/lists', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    })
    dispatch(getListsSuccess(res.data))
  } catch (err) {
    dispatch(getListsFailure())
  }
}

export const createList = async (dispatch, list) => {
  dispatch(createListStart())
  try {
    const res = await axios.post('api/lists', list, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    })
    dispatch(createListSuccess(res.data))
  } catch (err) {
    dispatch(createListFailure())
  }
}

export const deleteList = async (dispatch, id) => {
  dispatch(deleteListStart())
  try {
    const res = await axios.delete('api/lists/' + id, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    })
    dispatch(deleteListSuccess(res.data))
  } catch (err) {
    dispatch(deleteListFailure())
  }
}
