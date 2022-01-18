import { Link, useLocation } from 'react-router-dom'

import './watch.scss'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function Watch() {
  const location = useLocation()
  const movie = location.movie

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIcon />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress="true" controls src={movie.video} />
    </div>
  )
}
