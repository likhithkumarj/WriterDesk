import DashboardHeader from "../components/dashboard/DashboardHeader";
import Sidebar from "../components/dashboard/Sidebar";
import '../style/dashboard/Dashboard.css'
import Dashboard from "../pages/Dashboard";

function DashboardLayout() {
  document.title = "WriterDesk · Dashboard"
  return (
    <div className="dashboardPage">
      <Sidebar/>
      <div className="sideContent">
        <DashboardHeader/>
        <Dashboard/>
      </div>
    </div>
  );
}

export default DashboardLayout