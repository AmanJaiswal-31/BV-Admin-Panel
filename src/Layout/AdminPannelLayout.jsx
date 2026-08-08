import React, { lazy, Suspense, useState } from "react";
import Sidebar from "../Components/Sidebar";
import style from './AdminPannelLayout.module.css'

const Dashboard = lazy(() => import("../pages/Dashboard"))
const User = lazy(() => import("../pages/User"))
const Material = lazy(() => import("../pages/Material"))
const Notice = lazy(() => import("../pages/Notice"))
const College = lazy(() => import("../pages/College"))
const Syllabus = lazy(() => import("../pages/Syllabus"))


function AdminPannelLayout() {
    const [activePage, setActivePage] = useState("dashboard");
    const [showSidebar, setShowSidebar] = useState(true)

    return (
        <>


            <div className={style.layout}>
                {showSidebar && <Sidebar setActivePage={setActivePage} activePage={activePage} />}
                <button onClick={() => setShowSidebar(!showSidebar)} className={style.ToggleButton}><span className="material-symbols-outlined">menu</span></button>
                <Suspense fallback={<h2>Loading...</h2>}>
                    <div className={style.content}>
                        {activePage === "dashboard" && <Dashboard />}
                        {activePage === "user" && <User />}
                        {activePage === "material" && <Material />}
                        {activePage === "notice" && <Notice />}
                        {activePage === "college" && <College />}
                        {activePage === "syllabus" && <Syllabus />}
                    </div>
                </Suspense>
            </div>
        </>
    );
}


export default AdminPannelLayout
