
// styles
import '../../../styles/components/users.scss'
import DashboardCard from "../DashboardCard/DashboardCard";
import UsersData from "../UsersData/UsersData";

export default function Users() {

  return (
    <div className="users">
      <h1>Users</h1>
      <DashboardCard/>
      <UsersData/>
    </div>
  )
}