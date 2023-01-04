// icons
import { Link } from 'react-router-dom'
import dropdown from '../../../assets/icons/filterIcon.svg'
import threeDots from '../../../assets/icons/threeDotsIcon.svg'

// styles
import '../../../styles/components/users.scss'
// header data
const header = ['organization', 'username', 'email', 'phone number', 'date joined', 'status']

export default function UsersData({users}:any) {
  return (
    <div className='user-data'>
      <div className='user-data-header'>
        {header.map((h:string) =>(
          <div className='head' key={h}>
            <h2>{h}</h2>
            <img src={dropdown} alt="dropdown" />
          </div>
        ))}
      </div>
      <div className=''>
          {users && users.map((user:any) => (
            <Link to={`/user/${user.id}`} className='user-data-header' key={user.id}>
              <span className=' detail'>{user.orgName}</span>
              <span className=' detail'>{user.userName}</span>
              <span className=' detail'>{user.email}</span>
              <span className=' detail'>{user.phoneNumber}</span>
              <span className=' detail'>{new Date( Date.parse(user.createdAt)).toUTCString()}</span>
              <div className='status-wrapper detail'>
                <span>Active</span>
                <img src={threeDots} alt="" />
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}