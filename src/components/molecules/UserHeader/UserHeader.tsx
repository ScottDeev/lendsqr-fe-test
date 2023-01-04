
// icons
import starEmpty from '../../../assets/icons/starIcon-empty.svg'
import starFilled from '../../../assets/icons/starIcon-filled.svg'

const header = ['General Details', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System']

export default function UserHeader() {
  const user = JSON.parse(localStorage.getItem('user')|| "");
  return (
    <div className="user-header">
    {user && (
      <div className="user-profile-head">
        <div className="avatar-name">
          <div className="avatar">
            <img src={user.profile.avatar} alt="" />
          </div>
          <div className="name">
            <h1>{user.profile.firstName} {user.profile.lastName}</h1>
            <span>{user.accountNumber}</span>
          </div>
        </div>
        <div className="tier">
          <span>User's Tier</span>
          <div className="rate">
            <img src={starFilled} alt="" />
            <img src={starEmpty} alt="" />
            <img src={starEmpty} alt="" />
          </div>
        </div>
        <div className="account">
          <span className="balance">₦ {user.accountBalance}</span>
          <span>{user.profile.bvn}/Providus Bank</span>
        </div>
      </div>
    )}
      <div className="header-labels">
        {header.map((h:string) =>(
            <div className={`head ${h==='General Details' ? 'active': ''}`} key={h}>
              <span>{h}</span>
            </div>
        ))}
      </div>
    </div>
  )
}