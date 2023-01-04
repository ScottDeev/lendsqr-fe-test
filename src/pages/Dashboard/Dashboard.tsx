import Navbar from "../../components/molecules/Navbar/Navbar";
import Sidebar from "../../components/molecules/Sidebar/Sidebar";
import Users from "../../components/molecules/Users/Users";
// style
import '../../styles/dashboaed.scss'
export default function Dashboard() {
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <Users/>
    </main>
  )
}