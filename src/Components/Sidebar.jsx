import React from "react";
import { Layout, Menu, theme } from 'antd';
import style from './Sidebar.module.css'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  DashboardOutlined,
  UserOutlined,
  FileTextOutlined,
  NotificationOutlined,
  BankOutlined,
  BookOutlined,
} from "@ant-design/icons";


const { Sider } = Layout
const myItems = [
  {
    key: "dashboard",
    icon: (
      <span className="material-symbols-outlined">
        dashboard
      </span>
    ),
    label: "Dashboard"
  },
  {
    key: "user",
    icon: <UserOutlined />,
    label: "User"
  },
  {
    key: "material",
    icon: <FileTextOutlined />,
    label: "Material"
  },
  {
    key: "notice",
    icon: <NotificationOutlined />,
    label: "Notice"
  },
  {
    key: "college",
    icon: <BankOutlined />,
    label: "College"
  },
  {
    key: "syllabus",
    icon: <BookOutlined />,
    label: "Syllabus"
  }

]
function Sidebar({ setActivePage, activePage }) {
  const navigation = useNavigate();

  function handleClick() {
    toast.success("Logged out successfully!");
    localStorage.removeItem("email");
    navigation("/login");
  }


  return (
    <Sider className={style.Sider} width={255}>

      <div className={style.LogoContainer}>
        <div className={style.logo}>
          B
        </div>

        <div className={style.text}>
          <h3>BEUVERSE</h3>
          <p>Admin Panel</p>
        </div>
      </div>

      <Menu
        theme="dark"
        items={myItems}
        selectedKeys={[activePage]}
        onClick={({ key }) => {
          setActivePage(key)
        }}
      />
      <button
        className={`btn btn-danger ${style.Logout}`}
        onClick={handleClick}
      >
        Logout
      </button>

    </Sider>
  );
}

export default Sidebar;