import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  Cancel,
  Close,
  EditLocation,
  Groups,
  ManageAccounts,
  MeetingRoom,
  MonetizationOn,
  ShoppingBagRounded,
  Train,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../utils";

const tripManagementMenus = [
  {
    icon: <ShoppingBagRounded htmlColor="#04bcc4" />,
    title: "My Trips",
    subtitle: "View and manage tour travel",
    link: "/trips",
  },
  {
    icon: <Train htmlColor="#04bcc4" />,
    title: "Manage Transfers",
    subtitle: "Modify or book transportation",
    link: "/modify-transfers",
  },
  {
    icon: <MonetizationOn htmlColor="#04bcc4" />,
    title: "Make a Payment",
    subtitle: "Make and view payment history",
    link: "/make-a-payment",
  },
  {
    icon: <EditLocation htmlColor="#04bcc4" />,
    title: "Modify Reservation",
    subtitle: "Make changes and see pricing",
    link: "/modify-reservation",
  },
  {
    icon: <Cancel htmlColor="#04bcc4" />,
    title: "Cancel my Reservation",
    subtitle: "Review and cancel",
    link: "/cancel-reservation",
  },
  {
    icon: <MeetingRoom htmlColor="#04bcc4" />,
    title: "Room Management",
    subtitle: "Manage Rooms",
    link: "/room-management",
  },
];

const accountManagementMenus = [
  {
    icon: <ManageAccounts htmlColor="#04bcc4" />,
    title: "My Profile",
    link: "/my-profile",
  },
  {
    icon: <Groups htmlColor="#04bcc4" />,
    title: "Guests",
    link: "/guests",
  },
];

export function Sidebar() {
  return (
    <Box
      sx={{ width: 260 }}
      role="presentation"
      className="sidebar overflow-auto  bg-white fixed w-20 top-0 left-0 border-0 border-r h-full hidden md:block z-10"
    >
      <List style={{ paddingLeft: "10px" }} className="relative flex items-center gap-4 h-16 text-white bg-[#04bcc4]">
        <img
          className="rounded-full h-10 w-10"
          src="https://lh3.googleusercontent.com/ogw/AOh-ky3vwCr7Z5tkuLU4YMeDTC7KyyaoRZ5grWDDRbjNJA=s32-c-mo"
        />
        <div>
          <p>
            User Account
            <br />
            <span className="text-xs">useraccount@gmail.com</span>
          </p>
        </div>

        <button onClick={toggleSidebar} className="absolute right-2 md:hidden sm:block">
          <Close />
        </button>
      </List>

      <List dense>
        <p className="text-sm text-gray-500 px-3 my-3">Trip Management</p>

        {tripManagementMenus.map((menu) => {
          return (
            <ListItem disablePadding key={menu.title} className="mb-3">
              <ListItemButton>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Link to={menu.link}>
                      <p>{menu.title}</p>
                      <p className="text-gray-500 text-xs">{menu.subtitle}</p>
                    </Link>
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <List disablePadding>
        <p className="text-sm text-gray-500 px-3 my-3">Account Management</p>

        {accountManagementMenus.map((menu) => {
          return (
            <ListItem key={menu.title} disablePadding>
              <ListItemButton>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Link to={menu.link} className="text-sm">
                      {menu.title}
                    </Link>
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
