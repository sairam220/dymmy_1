import {Link, withRouter} from 'react-router-dom'
import {BiTransfer} from 'react-icons/bi'
import {FaUserAlt} from 'react-icons/fa'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
   
    history.replace('/login')
  }

  

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/home">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690789046/Frame_507_fthrk4.png"
              alt="website logo"
            />
          </Link>

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img-1"
            />
          </button>
        </div>

        
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/home" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-img"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/all-transactions" className="nav-link">
            <BiTransfer/>
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/profile" className="nav-link">
            <FaUserAlt/>
              
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)