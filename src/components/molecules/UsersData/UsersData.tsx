import useAxios from '../../../assets/API/useAxios';
// icons
import dropdown from '../../../assets/icons/filterIcon.svg'
// styles
import '../../../styles/components/users.scss'
// data
const header = ['organization', 'username', 'email', 'phone number', 'date joined', 'status']
export default function UsersData() {
  const { response} = useAxios({
    url: '/users',
    headers: JSON.stringify({ accept: '*/*' }),
  });
  console.log(response);
  
  localStorage.setItem('users', JSON.stringify(response));

  const users = JSON.parse(localStorage.getItem('users')|| "");
  return (
    <div className='user-data'>
      <div className='user-data-header'>
        {header.map((h:string) =>(
          <div key={h}>
            <h2>{h}</h2>
            <img src={dropdown} alt="dropdown" />
          </div>
        ))}
      </div>
      <div className=''>
          {users && users.map((user:any) => (
            <div className='user-data-header' key={user.id}>
              <span>{user.orgName}</span>
              <span>{user.userName}</span>
              <span>{user.email}</span>
              <span>{user.phoneNumber}</span>
              <span>{new Date( Date.parse(user.createdAt)).toUTCString()}</span>
              <span>status</span>
            </div>
          ))}
      </div>
    </div>
  )
}