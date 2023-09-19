import Wrapper from "../assets/styledComponents/Bigsidebar";
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

const BigSidebar = () => {
  const { showSidebar, user } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;
              if (path === "admin" && user.role !== "admin") return;
              return (
                <NavLink end className="nav-link" key={text} to={path}>
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
export default BigSidebar;
