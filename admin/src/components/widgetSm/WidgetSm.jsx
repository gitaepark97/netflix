import { useEffect, useState } from 'react'
import axios from 'axios'

import './widgetSm.css'

import VisibilityIcon from '@mui/icons-material/Visibility'

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('api/users?new=true', {
          headers: {
            token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
          },
        })
        setNewUsers(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getNewUsers()
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user => (
          <li className="widgetSmList">
            <img
              src={user.profilePic || 'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmImg">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
