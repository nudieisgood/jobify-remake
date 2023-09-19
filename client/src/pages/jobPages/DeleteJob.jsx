import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import customFetch from "../../utilis/customFetch";

export const action = async ({ params }) => {
  const { id } = params;
  try {
    await customFetch.delete(`/jobs/${id}`);
    toast.success("Delete job successfully.");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("/dashboard/all-jobs");
};

const DeleteJob = () => {
  return null;
};
export default DeleteJob;
