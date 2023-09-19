import { useState } from "react";
import { useContext, createContext } from "react";
import {
  Outlet,
  useLoaderData,
  redirect,
  useNavigation,
} from "react-router-dom";
import Wrapper from "../assets/styledComponents/Dashboard";
import { BigSidebar, Navbar, SmallSidebar, Loading } from "../components";
import checkIsLoggined from "../utilis/checkIsLoggined";
import customFetch from "../utilis/customFetch";

export const loader = async () => {
  try {
    // await checkIsLoggined();
    const res = await customFetch.get("/users/current-user");
    const { user } = res.data;
    return { user };
  } catch (error) {
    throw redirect("/");
  }
};

const DashboardContext = createContext();

const DashboardLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  const [showSidebar, setShowSidebar] = useState(false);
  const { user } = useLoaderData();

  const toggleSidebar = (e) => {
    setShowSidebar(!showSidebar);
  };

  const contextValue = { user, showSidebar, toggleSidebar };
  return (
    <DashboardContext.Provider value={contextValue}>
      <Wrapper>
        <div className="dashboard">
          <BigSidebar />
          <SmallSidebar />

          <div>
            <Navbar />
            <div className="dashboard-outlet">
              {isPageLoading ? <Loading /> : <Outlet />}
            </div>
          </div>
        </div>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
