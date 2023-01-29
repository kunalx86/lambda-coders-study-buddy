import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
  MdClass,
  MdScore,
  MdSchedule,
  MdStackedBarChart,
  MdCalculate,
  MdMoney,
  MdFeedback,
  MdSports,
  MdAttachment,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import TeacherView from "views/admin/teachers";
import ClassView from "views/admin/class";
import Profile from "views/admin/profile";

import TeacherClass from "views/teacher/class";
import PredictionView from "views/teacher/prediction";
import MarksView from "views/teacher/marks";
import ScholarshipView from "views/teacher/scholarship";
import GraphView from "views/teacher/graph";
import AttendancePage from "views/teacher/attendance";
// Auth Imports
import IndexPage from "views";
import { HomeIcon } from "components/icons/Icons";
import SportsView from "views/teacher/sports";
import ScheduleView from "views/teacher/schedule";

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
    name: "Prediction",
    layout: "/teacher",
    path: "/prediction",
    icon: <Icon as={MdCalculate} width="20px" height="20px" color="inherit" />,
    component: PredictionView,
  },
  {
    name: "Scholarship",
    layout: "/teacher",
    path: "/scholarship",
    icon: <Icon as={MdMoney} width="20px" height="20px" color="inherit" />,
    component: ScholarshipView,
  },
  {
    name: "Sports",
    layout: "/teacher",
    path: "/sports",
    icon: <Icon as={MdSports} width="20px" height="20px" color="inherit" />,
    component: SportsView,
  },
  {
    name: "Feedback",
    layout: "/teacher",
    path: "/feedback",
    icon: <Icon as={MdFeedback} width="20px" height="20px" color="inherit" />,
    component: PredictionView,
  },
  {
    name: "Graphs",
    layout: "/teacher",
    path: "/graphs",
    icon: (
      <Icon as={MdStackedBarChart} width="20px" height="20px" color="inherit" />
    ),
    component: GraphView,
  },
  {
    name: "Attendance",
    layout: "/teacher",
    path: "/attendance",
    icon: <Icon as={MdAttachment} width="20px" height="20px" color="inherit" />,
    component: AttendancePage,
  },
  {
    name: "Schedule",
    layout: "/teacher",
    path: "/schedule",
    icon: <Icon as={MdSchedule} width="20px" height="20px" color="inherit" />,
    component: ScheduleView,
  },
  {
    name: "Student Schedule",
    layout: "/student",
    path: "/schedule",
    icon: <Icon as={MdSchedule} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Student Schedule",
    layout: "/student",
    path: "/schedule",
    icon: <Icon as={MdSchedule} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
];

export default routes;
