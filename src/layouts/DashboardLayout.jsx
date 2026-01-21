import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Sidebar from "../components/dashboard/Sidebar";
import '../style/dashboard/Dashboard.css'

function DashboardLayout() {
  document.title = "WriterDesk · Dashboard"
  return (
    <div className="dashboardPage">
      <Sidebar/>
      <div className="sideContent">
        <DashboardHeader/>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout