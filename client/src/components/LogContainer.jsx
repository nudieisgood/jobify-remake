import Wrapper from "../assets/styledComponents/LogContainer";
import customFetch from "../utilis/customFetch";
import { useNavigate } from "react-router-dom";
import { useDashboardContext } from "../pages/DashboardLayout";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const LogContainer = () => {
  const { user } = useDashboardContext();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const res = await customFetch.get("/auth/logout");
      toast.success(res.data.msg);
      navigate("/");
    } catch (error) {
      return error;
    }
  };
  return (
    <Wrapper>
      <div className="user-container">
        {user?.avatar ? (
          <img className="avatar-img" src={user.avatar} alt="user image" />
        ) : (
          <FaUserCircle />
        )}
        {user?.name}
      </div>
      <button className="btn" onClick={logout}>
        Logout
      </button>
    </Wrapper>
  );
};
export default LogContainer;
