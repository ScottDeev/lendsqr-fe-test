import { useState } from "react";
import Input from "../../atoms/Input";
import Logo from "../../atoms/Logo";

// styles
import '../../../styles/components/navbar.scss'

// icons
import SearchIcon from '../../../assets/icons/searchIcon.svg'
import notification from '../../../assets/icons/notificationIcon.svg'
import dropdown from '../../../assets/icons/dropdown.svg'

// image
import profile from '../../../assets/images/profile.png'


export default function Navbar() {
  const [query, setQuery] = useState('')
  return (
    <nav className="nav col-12-xs">
      <div className="logo-search col-6-xs">
        <Logo height='30px' width='50%'/>
        <form className="form col-6-xs">
          <label>
            <Input type="text" value={query} placeholder="Search for anything" handleChange={(e) => setQuery(e.target.value)}/>
          </label>
          <button>
            <img src={SearchIcon} alt="searchicon" />
          </button>
        </form>
      </div>
      <div className="profile-div col-6-xs">
        <div className="hide">
          <span className="docs">Docs</span>
        </div>
        <div className="hide">
          <img src={notification} alt="" />
        </div>
        <div className="profile-details">
          <img className="profile-icon" src={profile} alt="" />
          <span className="name hide">Adedeji</span>
          <img src={dropdown} alt="" />
        </div>
      </div>
    </nav>
  )
}