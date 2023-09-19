import Wrapper from "../assets/styledComponents/JobInfo";

const JobInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <div className="jobInfo-icon">{icon}</div>
      <div className="jobInfo-text">{text}</div>
    </Wrapper>
  );
};
export default JobInfo;
