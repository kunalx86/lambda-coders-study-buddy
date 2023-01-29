import React from "react";

import { Icon } from "@chakra-ui/react";
import { MdPerson, MdHome, MdClass, MdScore, MdSchedule, MdStackedBarChart } from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import TeacherView from "views/admin/teachers";
import ClassView from "views/admin/class";
import Profile from "views/admin/profile";

import TeacherClass from "views/teacher/class";
import MarksView from "views/teacher/marks";
// Auth Imports
import IndexPage from "views";
import { HomeIcon } from "components/icons/Icons";

const routes = [
  {
    name: "Index Page",
    layout: "/home",
    path: "/default",
    icon: <Icon as={HomeIcon} width="20px" height="20px" color="inherit" />,
    component: IndexPage,
  },
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Teachers",
    layout: "/admin",
    path: "/teachers",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: TeacherView,
  },
  {
    name: "Class",
    layout: "/admin",
    icon: <Icon as={MdClass} width="20px" height="20px" color="inherit" />,
    path: "/classes",
    component: ClassView,
  },
  {
    name: "Class",
    layout: "/teacher",
    path: "/default",
    icon: <Icon as={MdClass} width="20px" height="20px" color="inherit" />,
    component: TeacherClass,
  },
  {
    name: "Marks",
    layout: "/teacher",
    path: "/marks",
    icon: <Icon as={MdScore} width="20px" height="20px" color="inherit" />,
    component: MarksView,
  },
  {
    name: "Schedule",
    layout: "/teacher",
    path: "/schedule",
    icon: <Icon as={MdSchedule} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Graphs",
    layout: "/teacher",
    path: "/graphs",
    icon: <Icon as={MdStackedBarChart} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Student Schedule",
    layout: "/student",
    path: "/schedule",
    icon: <Icon as={MdSchedule} width="20px" height="20px" color="inherit" />,
    component: Profile
  },
  {
    name: "Student Schedule",
    layout: "/student",
    path: "/schedule",
    icon: <Icon as={MdSchedule} width="20px" height="20px" color="inherit" />,
    component: Profile
  }
];

export default routes;
