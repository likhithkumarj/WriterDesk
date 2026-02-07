import React from "react";
// import * as React from 'react';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../../style/dashboard/Sidebar.css";
import {
  LayoutDashboard,
  Telescope,
  MessageCircle,
  CalendarCheck2,
  Bell,
  Info,
  Settings,
  ChevronUp,
  LogOut,
} from "lucide-react";
import { signOut } from "../../services/authService";


const handleClick = (e) => {
  e.stopPropagation();
  setAnchorEl(e.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

function Sidebar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard size={16} />,
    },
    {
      name: "Community",
      href: "/community",
      icon: <Telescope size={16} />,
    },
    {
      name: "Message",
      href: "/message",
      icon: <MessageCircle size={16} />,
    },
    {
      name: "Schedule",
      href: "/schedule",
      icon: <CalendarCheck2 size={16} />,
    },
    {
      name: "Notification",
      href: "/notification",
      icon: <Bell size={16} />,
    },
  ];

  return (
    <div className="fullsidebar">
      <div className="sidebar1">
        <div className="sideTitle">
          <div className="sideLogo">WD</div>
          <h1>WriterDesk</h1>
        </div>
        <div className="divider"></div>
        <div className="navList">
          <h4>Navigation</h4>
          <div className="navList">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="navitem">
                <div className="navIcon">{item.icon}</div>
                <div className="navName">{item.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="sidebar2">
        <div className="recentList">
          <h4>Recent</h4>
          <div className="recentItem">
            <div className="recentIcon">H</div>
            <div className="recentTitle">Happening</div>
          </div>
          <div className="recentItem">
            <div className="recentIcon">F</div>
            <div className="recentTitle">Friends</div>
          </div>
        </div>
        <div className="softwareOption">
          <a href="/help" className="helpBtn">
            <div className="helpIcon">
              <Info size={16} />
            </div>
            <div className="helpTitle">Help</div>
          </a>
          <a href="/setting" className="settingBtn">
            <div className="settingIcon">
              <Settings size={16} />
            </div>
            <div className="settingTitle">Setting</div>
          </a>
          <div className="profile">
            <div className="dp"></div>
            <div className="userinfo">
              <div className="username">Saul</div>
              <div className="subscriptionName">Free plan</div>
            </div>
            <>
              <Button
                className="moreOption"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <ChevronUp size={16} />
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                PaperProps={{
                  sx: {
                    backgroundColor: "#111",
                    color: "#fff",
                  },
                }}
              >
                <MenuItem
                  onClick={async (e) => {
                    e.stopPropagation();
                    await signOut();
                    handleClose();
                  }}
                  sx={{
                    gap: 1,
                    "&:hover": {
                      backgroundColor: "#1f1f1f",
                    },
                  }}
                >
                  <LogOut size={16} />
                  Logout
                </MenuItem>
              </Menu>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
