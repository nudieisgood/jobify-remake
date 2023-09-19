import customFetch from "../../utilis/customFetch";
import { toast } from "react-toastify";
import { redirect, useLoaderData } from "react-router-dom";
import Wrapper from "../../assets/styledComponents/Stats";
import { StatItem } from "../../components";
import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";

export const loader = async () => {
  try {
    const res = await customFetch.get("users/admin/app-stats");

    const { jobs, users } = res.data;
    return { jobs, users };
  } catch (error) {
    toast.error("Can not access this page");
    return redirect("/dashboard");
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();

  return (
    <Wrapper>
      <StatItem
        title="current users"
        count={users}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title="total jobs"
        count={jobs}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
};
export default Admin;
