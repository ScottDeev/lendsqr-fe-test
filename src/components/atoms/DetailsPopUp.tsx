import eye from '../../assets/icons/eye.svg'
import blacklist from '../../assets/icons/blacklist.svg'
import activate from '../../assets/icons/activate.svg'
import { Link } from 'react-router-dom'


export default function DetailsPopUp({link}:any) {
  return (
    <div className='details-popup'>
      <div>
        <img src={eye} alt="eye icon" />
        <Link to={link}>View Details</Link>
      </div>
      <div>
        <img src={blacklist} alt="blacklist user icon" />
        <span>Blacklist User</span>
      </div>
      <div>
        <img src={activate} alt="activate user icon" />
        <span>Activate User</span>
      </div>
    </div>
  )
}