// data
import { SideBarContent } from "./SidebarContent";
// icons
import organisation from '../../../assets/icons/organisationIcon.svg'
import arrowDown from '../../../assets/icons/arrowDownIcon.svg'
import dashboard from '../../../assets/icons/dashboardIcon.svg'
import signOut from '../../../assets/icons/sign-out.svg'


// styles
import '../../../styles/components/sidebar.scss'

export default function Sidebar({sideBar}:any) {
  return (
    <aside className={`aside ${sideBar ? 'show': ''}`} data-testid="sidebar">
      <div className="aside-header flex-r-10">
        <img src={organisation} alt="organisation" />
        <span>Switch Organisation</span>
        <img src={arrowDown} alt="arrow" />
      </div>
      <div className="dashboard flex-r-10">
        <img src={dashboard} alt="dashboard" />
        <span>Dashboard</span>
      </div>
      <div>
        <span className="links-header">CUSTOMERS</span>
        <div className="links">
          {SideBarContent && SideBarContent.customers.map((customer: any) => (
            <div className={`flex-r-10 side-link ${customer.tag === 'Users' ? 'active': ''}`} key={customer.id}>
              <img src={customer.icon} alt={customer.tag} />
              <span>{customer.tag}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <span className="links-header">BUSINESSES</span>
        <div className="links">
          {SideBarContent && SideBarContent.businesses.map((business: any) => (
            <div className="flex-r-10 side-link" key={business.id}>
              <img src={business.icon} alt={business.tag} />
              <span>{business.tag}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <span className="links-header">SETTINGS</span>
        <div className="links">
          {SideBarContent && SideBarContent.settings.map((setting: any) => (
            <div className="flex-r-10 side-link" key={setting.id}>
              <img src={setting.icon} alt={setting.tag} />
              <span>{setting.tag}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="logout-div">
        <div className="divider"></div>
        <div className="flex-r-10 side-link">
          <img src={signOut} alt="logout" />
          <span>Logout</span>
        </div>
        <span className="version">v1.2.0</span>
      </div>
    </aside>
  )
}