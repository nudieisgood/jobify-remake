import Wrapper from "../../assets/styledComponents/FormContainer";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

import { FormRow, FormRowSelect } from "../../components";
import customFetch from "../../utilis/customFetch";

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

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const res = await customFetch.post("/jobs", data);
    toast.success("Job created.");
    return redirect("all-jobs");
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const AddJob = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post">
        <h4 className="form-title">Add Job</h4>
        <div className="form-center">
          <FormRow name="position" type="text" />
          <FormRow name="company" type="text" />
          <FormRow name="jobLocation" type="text" labelText="location" />
          <FormRowSelect
            name="jobStatus"
            list={Object.values(JOB_STATUS)}
            labelText="job status"
            defaultValue={JOB_STATUS.PENDING}
          />
          <FormRowSelect
            name="jobType"
            list={Object.values(JOB_TYPE)}
            labelText="job type"
            defaultValue={JOB_TYPE.FULLTIME}
          />
          <button className="btn btn-block form-btn" type="submit">
            {isSubmitting ? "Submit..." : "Submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddJob;
