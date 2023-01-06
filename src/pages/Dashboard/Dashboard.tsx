import { useState } from "react";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Sidebar from "../../components/molecules/Sidebar/Sidebar";
import Users from "../../components/molecules/Users/Users";
// style
import '../../styles/dashboard.scss'
export default function Dashboard() {
  const [sideBar, setSideBar] = useState(false)
  const toggleSideBar = () => {
    sideBar ? setSideBar(false) : setSideBar(true)
  }
  return (
    <main>
      <Navbar toggleSideBar={toggleSideBar}/>
      <Sidebar sideBar={sideBar}/>
      <Users/>
    </main>
  )
}