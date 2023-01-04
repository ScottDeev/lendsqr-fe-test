
// styles
import '../../../styles/components/users.scss'
import DashboardCard from "../DashboardCard/DashboardCard";
import Pagination from '../UsersData/Pagination';

export default function Users() {

  return (
    <div className="users">
      <h1>Users</h1>
      <DashboardCard/>
      <Pagination itemsPerPage={10}/>
    </div>
  )
}