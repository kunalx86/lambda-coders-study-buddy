import React from "react";
import { FcSportsMode } from "react-icons/fc"
import { MdVolunteerActivism, MdOutlineComputer } from "react-icons/md"
import { FaBusinessTime } from "react-icons/fa";

const SidebarData = [
    {
        title: "Coding",
        path: "/student/coding",
        icon: <MdOutlineComputer />,
    },
    {
        title: "Sports",
        path: "/student/sports",
        icon: <FcSportsMode />,
    },
    {
        title: "Volunteer",
        path: "/student/Volunteer",
        icon: <MdVolunteerActivism />,
    }, {
        title: "Entrepreneurship",
        path: "/student/Entrepreneurship",
        icon: <FaBusinessTime />
    }
];

export default SidebarData;