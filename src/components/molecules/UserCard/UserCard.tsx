import useAxios from '../../../assets/API/useAxios'
// styles
import '../../../styles/components/usercard.scss'
// icons
import back from '../../../assets/icons/backIcon.svg'
import UserHeader from '../UserHeader/UserHeader'
import { Link, useParams } from 'react-router-dom';

export default function UserCard() {
  const {id} = useParams()
  console.log(id);
  
  const { response} = useAxios({
    url: `/users/${id}`,
    headers: JSON.stringify({ accept: '*/*' }),
  });
  console.log(response);
  localStorage.setItem('user', JSON.stringify(response));
  const user = JSON.parse(localStorage.getItem('user')|| "");
  return (
    <div className="user">
      <div className='header-wrapper'>
        <Link to='/' className='back'>
          <img src={back} alt="back" />
          <span>Back to Users</span>
        </Link>
        <div className='head-button'>
          <span>User Details</span>
          <div className='buttons'>
            <button className='blacklist'>Blacklist user</button>
            <button className='activate'>Activate user</button>
          </div>
        </div>
      </div>
      <UserHeader/>
      {user && 
      <div className='user-details'>
        <div className='wrapper'>
          <span className='header'>Personal Information</span>
          <div className='flex-row'>
            <div className='col-2-lg'>
              <span>Full name</span>
              <p>{user.profile.firstName}{user.profile.lastName}</p>
            </div>
            <div className='col-2-lg'>
              <span>Phone Number</span>
              <p>{user.phoneNumber}</p>
            </div>
            <div className='col-2-lg'>
              <span>Email Address</span>
              <p>{user.email}</p>
            </div>
            <div className='col-2-lg'>
              <span>BVN</span>
              <p>{user.profile.bvn}</p>
            </div>
            <div className='col-2-lg'>
              <span>Gender</span>
              <p>{user.profile.gender}</p>
            </div>
          </div>
        </div>
        <div className='wrapper'>
          <span className='header'>Education and Employment</span>
          <div className='flex-row'>
            <div className='col-2-lg'>
              <span>Level of Education</span>
              <p>{user.education.level}</p>
            </div>
            <div className='col-2-lg'>
              <span>Employment Status</span>
              <p>{user.education.employmentStatus}</p>
            </div>
            <div className='col-2-lg'>
              <span>sector of employment</span>
              <p>{user.education.sector}</p>
            </div>
            <div className='col-2-lg'>
              <span>Duration of employment</span>
              <p>{user.education.duration}</p>
            </div>
            <div className='col-2-lg'>
              <span>office email</span>
              <p>{user.education.officeEmail}</p>
            </div>
            <div className='col-2-lg'>
              <span>Monthly income</span>
              <p>₦{user.education.monthlyIncome[1]} - ₦{user.education.monthlyIncome[0]}</p>
            </div>
            <div className='col-2-lg'>
              <span>loan repayment</span>
              <p>{user.education.loanRepayment}</p>
            </div>
          </div>
        </div>
        <div className='wrapper'>
          <span className='header'>Socials</span>
          <div className='flex-row'>
            <div className='col-2-lg'>
              <span>Level of Education</span>
              <p>{user.socials.twitter}</p>
            </div>
            <div className='col-2-lg'>
              <span>Employment Status</span>
              <p>{user.socials.facebook}</p>
            </div>
            <div className='col-2-lg'>
              <span>sector of employment</span>
              <p>{user.socials.instagram}</p>
            </div>
          </div>
        </div>
        <div className='wrapper'>
          <span className='header'>Guaranto</span>
          <div className='flex-row'>
            <div className='col-2-lg'>
              <span>Full name</span>
              <p>{user.guarantor.firstName}{user.guarantor.lastName}</p>
            </div>
            <div className='col-2-lg'>
              <span>Phone Number</span>
              <p>{user.guarantor.phoneNumber}</p>
            </div>
            <div className='col-2-lg'>
              <span>Address</span>
              <p>{user.guarantor.address}</p>
            </div>
            <div className='col-2-lg'>
              <span>Gender</span>
              <p>{user.profile.gender}</p>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}