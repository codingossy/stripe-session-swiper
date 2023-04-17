import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <div className="flex items-center justify-center h-screen flex-col">
        <h1>hi, be like you don lost ooo</h1>
        <p>but no worry, i dey for you</p>
        <div className="my-5">
        <Link to={`/`}>
            <p className="capitalize text-red-500">go back home</p>
        </Link>
      </div>
      </div>

      
    </div>
  );
};

export default ErrorPage;