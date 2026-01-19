import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Sidebar from "../components/dashboard/Sidebar";

function DashboardLayout() {
  return (
    <>
      <DashboardHeader/>
      <Sidebar/>
      <main className="content">
        <Outlet />
      </main>
    </>
  );
}

export default DashboardLayout