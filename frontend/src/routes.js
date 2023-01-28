import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdClass,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import TeacherView from "views/admin/teachers";
import ClassView from "views/admin/class";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import IndexPage from "views";
import { HomeIcon } from "components/icons/Icons";

const routes = [
  {
    name: "Index Page",
    layout: "/home",
    path: "/default",
    icon: <Icon as={HomeIcon} width="20px" height="20px" color="inherit" />,
    component: IndexPage
  },
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Teachers",
    layout: "/admin",
    path: "/teachers",
    icon: (
      <Icon
        as={MdPerson}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: TeacherView,
    secondary: true,
  },
  {
    name: "Class",
    layout: "/admin",
    icon: <Icon as={MdClass} width='20px' height='20px' color='inherit' />,
    path: "/classes",
    component: ClassView,
  },
  {
    name: "Profile",
    layout: "/teacher",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  }
];

export default routes;
