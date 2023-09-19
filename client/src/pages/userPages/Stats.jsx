import { useLoaderData } from "react-router-dom";
import customFetch from "../../utilis/customFetch";
import { toast } from "react-toastify";
import { ChartsContainer, StatsContainer } from "../../components";

export const loader = async () => {
  try {
    const res = await customFetch("/jobs/stats");
    return {
      defaultStats: res.data.defaultStats,
      monthlyApplications: res.data.monthlyApplications,
    };
  } catch (error) {
    toast.error(error.response.data.msg);
  }
};

const Stats = () => {
  const { defaultStats, monthlyApplications } = useLoaderData();

  return (
    <>
      <StatsContainer data={defaultStats} />
      {monthlyApplications?.length ? (
        <ChartsContainer data={monthlyApplications} />
      ) : null}
    </>
  );
};
export default Stats;
