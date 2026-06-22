import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Dashboard from "../pages/Dashboard";
import User from "../pages/User";
import Material from "../pages/Material";
import Notice from "../pages/Notice";
import College from "../pages/College";
import Syllabus from "../pages/Syllabus";
import style from './AdminPannelLayout.module.css'

function AdminPannelLayout() {
    const [activePage, setActivePage] = useState("dashboard");
    const [showSidebar, setShowSidebar] = useState(true)

    return (
        <>
            <button onClick={() => setShowSidebar(!showSidebar)} className={style.btn}><span className="material-symbols-outlined ">menu</span></button>
            <div className={style.layout}>
                {showSidebar && <Sidebar setActivePage={setActivePage} activePage={activePage} />}
                <div className={style.content}>
                    {activePage === "dashboard" && <Dashboard />}
                    {activePage === "user" && <User />}
                    {activePage === "material" && <Material />}
                    {activePage === "notice" && <Notice />}
                    {activePage === "college" && <College />}
                    {activePage === "syllabus" && <Syllabus />}
                </div>
            </div>
        </>
    );
}


export default AdminPannelLayout
