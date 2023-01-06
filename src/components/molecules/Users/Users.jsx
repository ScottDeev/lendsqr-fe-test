
// styles
import '../../../styles/components/users.scss'
import DashboardCard from "../DashboardCard/DashboardCard";
import Pagination from '../UsersData/Pagination';

export default function Users() {

  return (
    <div className="users">
      <span className='page-header'>Users</span>
      <DashboardCard/>
      <Pagination/>
    </div>
  )
}