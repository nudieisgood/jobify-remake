import customFetch from "../../utilis/customFetch";
import { useLoaderData } from "react-router-dom";
import {
  JobPaginationContainer,
  JobsContainer,
  SearchJobContainer,
} from "../../components";
import checkIsLoggined from "../../utilis/checkIsLoggined";

export const loader = async ({ request }) => {
  const queryEntriesArr = [...new URL(request.url).searchParams.entries()];
  const queryObj = Object.fromEntries(queryEntriesArr);

  try {
    await checkIsLoggined();
    const res = await customFetch("/jobs", { params: queryObj });

    const { jobs, totalJobs, currentPage } = res.data;
    return { jobs, searchValues: queryObj, totalJobs, currentPage };
  } catch (error) {
    return error;
  }
};

const AllJobs = () => {
  const loaderData = useLoaderData();
  const { jobs, searchValues, totalJobs, currentPage } = loaderData;
  return (
    <>
      <SearchJobContainer searchValues={searchValues} />
      <h2>{totalJobs} jobs</h2>
      <JobsContainer jobs={jobs} />
      <JobPaginationContainer
        totalJobs={totalJobs}
        totalPages={totalJobs / 10}
        currentPage={currentPage}
      />
    </>
  );
};
export default AllJobs;
