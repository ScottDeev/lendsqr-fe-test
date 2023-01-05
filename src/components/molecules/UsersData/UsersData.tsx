// icons
import React, { useState } from 'react'
import dropdown from '../../../assets/icons/filterIcon.svg'
import threeDots from '../../../assets/icons/threeDotsIcon.svg'

// styles
import '../../../styles/components/users.scss'
import DetailsPopUp from '../../atoms/DetailsPopUp'
import FilterForm from '../filterForm/FilterForm'
// header data
const header = ['organization', 'username', 'email', 'phone number', 'date joined', 'status']

export default function UsersData({users}:any) {
  const [filterForm, setFilterForm] = useState(false)
  const toggleFilterForm = () => {
    filterForm ? setFilterForm(false) : setFilterForm(true)
  }
  const handleClick = (e:React.MouseEvent<HTMLImageElement>) =>{
    // This gets the particular element clicked and add the 'show' class only to that one. 
    // The show class is responsible for showing the details pop up
    (e.target as Element).closest('.status-wrapper')?.querySelector('.details-popup')?.classList.toggle('show')    
  }
  return (
    <div className='user-data'>
      <FilterForm show={filterForm}/>
      <div className='user-data-header'>
        {header.map((h:string) =>(
          <div className={`head ${h === 'email' ? 'hide-md': ''} ${h === 'phone number' ? 'hide-xs': ''} ${h === 'date joined' ? 'hide-xs': ''} ${h === 'organization' ? 'hide-xxs': ''}`} key={h}>
            <h2>{h}</h2>
            <img onClick={toggleFilterForm} src={dropdown} alt="dropdown" />
          </div>
        ))}
      </div>
      <div data-testid="users-data" className=''>
          {users && users.map((user:any) => (
            <div className='user-data-header' key={user.id}>
              <span className=' detail hide-xxs'>{user.orgName}</span>
              <span className=' detail'>{user.userName}</span>
              <span className=' detail hide-md'>{user.email}</span>
              <span className=' detail hide-xs'>{user.phoneNumber}</span>
              <span className=' detail hide-xs'>{new Date( Date.parse(user.createdAt)).toUTCString()}</span>
              <div className='status-wrapper detail'>
                <span className='status'>Active</span>
                <img onClick={(e) => handleClick(e)} src={threeDots} alt="" />
                <DetailsPopUp link={`/user/${user.id}`}/>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}