import Wrapper from "../assets/styledComponents/FormContainer";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import { useSubmit, Form, Link } from "react-router-dom";

const JOB_STATUS = {
  PENDING: "pending",
  INTERVIEW: "interview",
  DECLINED: "declined",
};

const JOB_TYPE = {
  FULLTIME: "full-time",
  PARTTIME: "part-time",
  INTERNSHIP: "internship",
};

const JOB_SORT_BY = {
  NEWEST_FIRST: "newest",
  OLDEST_FIRST: "oldest",
  ASCENDING: "a-z",
  DESCENDING: "z-a",
};

const SearchJobContainer = ({ searchValues }) => {
  const { search, jobStatus, jobType, sort } = searchValues;

  const submit = useSubmit();
  return (
    <Wrapper>
      <Form>
        <h4 className="form-title">Search</h4>
        <div className="form-center">
          <FormRow
            defaultValue={search}
            name="search"
            labelText="search company"
            type="search"
            required={false}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="jobStatus"
            list={["all", ...Object.values(JOB_STATUS)]}
            labelText="job status"
            defaultValue={jobStatus || "all"}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="jobType"
            list={["all", ...Object.values(JOB_TYPE)]}
            labelText="job type"
            defaultValue={jobType || "all"}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="sort"
            list={Object.values(JOB_SORT_BY)}
            defaultValue={sort || JOB_SORT_BY.NEWEST_FIRST}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />

          <Link
            to="/dashboard/all-jobs"
            className="btn form-btn btn-danger btn-search"
          >
            Reset
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};
export default SearchJobContainer;
