import { Form, Link, redirect } from "react-router-dom";
import Wrapper from "../../assets/styledComponents/LoginAndRegister";
import { Logo, FormRow } from "../../components";
import customFetch from "../../utilis/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const res = await customFetch.post("/auth/register", data);
    toast.success(res.data.msg);
    return redirect("/login");
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" labelText="name" />
        <FormRow type="text" name="lastName" labelText="last name" />
        <FormRow type="text" name="location" labelText="location" />
        <FormRow type="email" name="email" labelText="email" />
        <FormRow type="password" name="password" labelText="password" />

        <button className="btn btn-block" type="submit">
          Submit
        </button>
        <p>
          Already a member?
          <Link className="member-btn" to="/login">
            Login
          </Link>
          here.
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
