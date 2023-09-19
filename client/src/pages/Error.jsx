import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops! something went wrong.</h1>
      <h2>status:{error.status}</h2>
      <h2>message:{error.msg}</h2>
    </div>
  );
};
export default Error;
