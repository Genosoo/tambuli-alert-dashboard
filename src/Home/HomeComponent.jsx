import HomeImg from '../assets/home.svg'
import { Link } from 'react-router-dom'

function HomeComponent() {
  return (
    <div className="homeContainer">
      <div className="homeContent">
        <span className="homeDetailWrapper">
          <h3>Report an incident now  to help keep our</h3>
          <h1>COMMUNITY SAFE</h1>
        </span>
        <img src={HomeImg} alt="home image" />
        <Link className="homeBtn" to='/login'>Sign in or Register now</Link>
      </div>
      
  </div>
  )
}

export default HomeComponent