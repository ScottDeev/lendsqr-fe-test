import Navbar from "../../components/molecules/Navbar/Navbar";
import Sidebar from "../../components/molecules/Sidebar/Sidebar";
import UserCard from "../../components/molecules/UserCard/UserCard";

export default function User() {
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <UserCard/>
    </main>
  )
}