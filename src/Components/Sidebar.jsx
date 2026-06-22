import React from "react";
import style from "./Sidebar.module.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar({ setActivePage,activePage}) {
  const navigation = useNavigate();

  function handleClick() {
    toast.success("Logged out successfully!");
    localStorage.removeItem("email");
    navigation("/login");
  }


  return (
    <nav className={style.Container}>
      <div className={style.Main} onClick={() => setActivePage("dashboard")} >
        <span className="material-symbols-outlined Icon">dashboard</span>
        <div className={`${style.MainContent} ${activePage=='dashboard'?style.active:style.menu}`}>Dashboard</div>
      </div>

      <div className={style.Main} onClick={() => setActivePage("user")}>
        <span className="material-symbols-outlined Icon">
          user_attributes
        </span>
        <div className={`${style.MainContent} ${activePage=='user'?style.active:style.menu}`}>User</div>
      </div>

      <div className={style.Main} onClick={() => setActivePage("material")}>
        <span className="material-symbols-outlined Icon">description</span>
        <div className={`${style.MainContent} ${activePage=='material'?style.active:style.menu}`}>Material</div>
      </div>

      <div className={style.Main} onClick={() => setActivePage("notice")}>
        <span className="material-symbols-outlined Icon">
          notifications_active
        </span>
        <div className={`${style.MainContent} ${activePage=='notice'?style.active:style.menu}`}>Notice</div>
      </div>

      <div className={style.Main} onClick={() => setActivePage("college")}>
        <span className="material-symbols-outlined Icon">
          account_balance
        </span>
        <div className={`${style.MainContent} ${activePage=='college'?style.active:style.menu}`}>Colleges</div>
      </div>

      <div className={style.Main} onClick={() => setActivePage("syllabus")}>
        <span className="material-symbols-outlined Icon">
          library_books
        </span>
        <div className={`${style.MainContent} ${activePage=='syllabus'?style.active:style.menu}`}>Syllabus</div>
      </div>

      <button
        className={`btn btn-danger ${style.Logout}`}
        onClick={handleClick}
      >
        Logout
      </button>
    </nav>
  );
}

export default Sidebar;