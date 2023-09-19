import Wrapper from "../assets/styledComponents/JobContainer";
import Job from "./Job";

const JobsContainer = ({ jobs }) => {
  if (jobs?.length === 0) {
    return (
      <Wrapper>
        <h1>No jobs...</h1>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="jobs">
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
    </Wrapper>
  );
};
export default JobsContainer;
