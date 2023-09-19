import {
  Form,
  useActionData,
  redirect,
  Link,
  useNavigate,
} from "react-router-dom";
import customFetch from "../../utilis/customFetch";
import { FormRow } from "../../components";
import { toast } from "react-toastify";

import Wrapper from "../../assets/styledComponents/LoginAndRegister";
import { Logo } from "../../components";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const res = await customFetch.post("/auth/login", data);
    toast.success(res.data.msg);
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const Login = () => {
  const navigate = useNavigate();
  const loginWithDemo = async () => {
    try {
      await customFetch.post("/auth/login", {
        email: "test@acc.com",
        password: "test1234",
      });
      toast.success("Explore Our App Now.");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  const error = useActionData();
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" labelText="email" />
        <FormRow type="password" name="password" labelText="password" />

        <button className="btn btn-block" type="submit">
          Submit
        </button>

        <button className="btn btn-block" type="button" onClick={loginWithDemo}>
          Explore the app
        </button>
        <p>
          Not a member?
          <Link className="member-btn" to="/register">
            Register
          </Link>
          now.
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
