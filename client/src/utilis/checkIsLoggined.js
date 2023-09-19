import customFetch from "./customFetch";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

const checkIsLoggined = async () => {
  try {
    await customFetch.get("/users/current-user");
  } catch (error) {
    toast.error("access rejected, login first.");
    throw redirect("/login?message=You must log in first.");
  }
};

export default checkIsLoggined;
