import Wrapper from "../assets/styledComponents/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import { NavLink } from "react-router-dom";

//
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
import Logo from "./Logo";

const links = [
  { text: "add job", path: ".", icon: <FaWpforms /> },
  { text: "all jobs", path: "all-jobs", icon: <MdQueryStats /> },
  { text: "stats", path: "stats", icon: <IoBarChartSharp /> },
  { text: "profile", path: "profile", icon: <ImProfile /> },
  { text: "admin", path: "admin", icon: <MdAdminPanelSettings /> },
];

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar, user } = useDashboardContext();

  const handleClick = (e) => {
    if (e.target.classList.value === "sidebar-container show-sidebar") {
      toggleSidebar();
    }
  };

  return (
    <Wrapper>
      <div
        onClick={handleClick}
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggleSidebar}>
            X
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;
              if (path === "admin" && user.role !== "admin") return;
              return (
                <NavLink
                  onClick={toggleSidebar}
                  end
                  className="nav-link"
                  key={text}
                  to={path}
                >
                  <span className="icon">{icon}</span> {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
