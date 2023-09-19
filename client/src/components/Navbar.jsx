import Logo from "./Logo";
import { FaAlignLeft } from "react-icons/fa";
import Wrapper from "../assets/styledComponents/Navbar";
import { useDashboardContext } from "../pages/DashboardLayout";
import LogContainer from "./logContainer";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button onClick={toggleSidebar} className="toggle-btn">
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <LogContainer />
      </div>
    </Wrapper>
  );
};
export default Navbar;
