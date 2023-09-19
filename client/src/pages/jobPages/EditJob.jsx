import customFetch from "../../utilis/customFetch";
import { toast } from "react-toastify";
import { Form, redirect, useNavigation, useLoaderData } from "react-router-dom";
import Wrapper from "../../assets/styledComponents/FormContainer";
import { FormRowSelect, FormRow } from "../../components";

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

export const loader = async ({ params }) => {
  const { id } = params;
  try {
    const res = await customFetch(`/jobs/${id}`);
    return res.data.job;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/all-jobs");
  }
};

export const action = async ({ request, params }) => {
  const { id } = params;
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const res = await customFetch.patch(`/jobs/${id}`, data);
    toast.success("Job updated successfully.");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const EditJob = () => {
  const loaderData = useLoaderData();
  const { company, jobLocation, jobStatus, jobType, position } = loaderData;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post">
        <h4 className="form-title">Edit Job</h4>
        <div className="form-center">
          <FormRow name="position" type="text" defaultValue={position} />
          <FormRow name="company" type="text" defaultValue={company} />
          <FormRow
            name="jobLocation"
            type="text"
            defaultValue={jobLocation}
            labelText="location"
          />
          <FormRowSelect
            name="jobStatus"
            list={Object.values(JOB_STATUS)}
            labelText="job status"
            defaultValue={jobStatus}
          />
          <FormRowSelect
            name="jobType"
            list={Object.values(JOB_TYPE)}
            labelText="job type"
            defaultValue={jobType}
          />
          <button className="btn btn-block form-btn" type="submit">
            {isSubmitting ? "Submit..." : "Submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default EditJob;
