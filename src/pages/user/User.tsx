import { useState } from "react";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Sidebar from "../../components/molecules/Sidebar/Sidebar";
import UserCard from "../../components/molecules/UserCard/UserCard";

export default function User() {
  const [sideBar, setSideBar] = useState(false)
  const toggleSideBar = () => {
    sideBar ? setSideBar(false) : setSideBar(true)
  }
  return (
    <main>
      <Navbar toggleSideBar={toggleSideBar}/>
      <Sidebar sideBar={sideBar}/>
      <UserCard/>
    </main>
  )
}