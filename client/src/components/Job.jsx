import Wrapper from "../assets/styledComponents/Job";
import JobInfo from "./JobInfo";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link, Form, useNavigate } from "react-router-dom";
import customFetch from "../utilis/customFetch";

const Job = ({
  _id,
  position,
  company,
  jobStatus,
  jobType,
  createdAt,
  jobLocation,
}) => {
  // const navigate = useNavigate();
  // const deleteJob = async () => {
  //   await customFetch.delete(`/jobs/${_id}`);
  //   navigate("");
  // };
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="header-info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="job-content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={createdAt} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${jobStatus}`}>{jobStatus}</div>
        </div>

        <footer>
          <Link to={`../edit-job/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`/dashboard/delete-job/${_id}`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </Form>
          {/* <button onClick={deleteJob} className="btn btn-danger">
            Delete
          </button> */}
        </footer>
      </div>
    </Wrapper>
  );
};
export default Job;
