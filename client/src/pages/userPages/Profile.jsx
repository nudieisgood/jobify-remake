import Wrapper from "../../assets/styledComponents/FormContainer";
import { Form, useNavigation } from "react-router-dom";
import { FormRow } from "../../components";
import { toast } from "react-toastify";
import customFetch from "../../utilis/customFetch";
import { useDashboardContext } from "../DashboardLayout";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    toast.error("Image size is too large");
    return null;
  }

  try {
    await customFetch.patch("/users/update-user", formData);
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const Profile = () => {
  const navigation = useNavigation();
  const { user } = useDashboardContext();

  const { email, lastName, location, name } = user;

  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" encType="multipart/form-data">
        <h4 className="form-title">Profile</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Select an image
            </label>
            <input
              type="file"
              accept="image/*"
              id="avatar"
              className="form-input"
              name="avatar"
            />
          </div>
          <FormRow type="text" name="name" id="name" defaultValue={name} />
          <FormRow
            type="text"
            name="lastName"
            id="lastName"
            labelText="last name"
            defaultValue={lastName}
          />
          <FormRow
            type="location"
            name="location"
            id="location"
            defaultValue={location}
          />
          <button
            className="btn btn-block form-btn"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default Profile;
