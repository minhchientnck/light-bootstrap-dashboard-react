/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TenMien from "views/TenMien.jsx";
import ChienDich from "views/ChienDich.jsx";
import ThongKe from "views/ThongKe.jsx";
import NapTien from "views/NapTien.jsx";
import HuongDan from "views/HuongDan.jsx";

import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Tổng Quan",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/ten-mien",
    name: "Tên Miền",
    icon: "pe-7s-world",
    component: TenMien,
    layout: "/admin"
  },
  {
    path: "/chien-dich",
    name: "Chiến Dịch",
    icon: "pe-7s-note2",
    component: ChienDich,
    layout: "/admin"
  },
  {
    path: "/nap-tien",
    name: "Nạp Tiền $$$",
    icon: "pe-7s-cash",
    component: NapTien,
    layout: "/admin"
  },
  {
    path: "/thong-ke",
    name: "Thống Kê Truy Cập",
    icon: "pe-7s-graph3",
    component: ThongKe,
    layout: "/admin"
  },
  {
    path: "/huong-dan",
    name: "Hướng Dẫn Sử Dụng",
    icon: "pe-7s-info",
    component: HuongDan,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Thông Tin Tài Khoản",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  // {
  //   path: "/icon",
  //   name: "Icon",
  //   icon: "pe-7s-graph3",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin"
  // },
];

export default dashboardRoutes;
