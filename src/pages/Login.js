import React, { useState } from "react";
import { setCookie } from "utils/cookie";
import { authService } from "services";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoginLoading, setisLoginLoading] = useState(false);

  const onSubmitLogin = () => {
    setisLoginLoading(true);
    authService
      .login(username, password)
      .then((res) => {
        const cookieToken = res.token;
        const cookieUser = {
          userId: res.userId,
          username: res.username,
        };
        setCookie("userData", JSON.stringify(cookieUser), 10000);
        setCookie("token", JSON.stringify(cookieToken), 10000);
        window.location.replace("/profile");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setisLoginLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-2/5">
        <h2 className="text-4xl text-gray-900 mb-6"> Login Page</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitLogin();
          }}
        >
          <label htmlFor="username" className="flex flex-col mb-4">
            Username :
            <input
              className="bg-white focus:outline-none border w-full px-6 py-2 mt-2 w-1/2 border-gray-600 focus:border-teal-500"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password" className="flex flex-col mb-4">
            Password :
            <input
              className="bg-white focus:outline-none border w-full px-4 py-2 mt-2 w-1/2 border-gray-600 focus:border-teal-500"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <input
            className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-full"
            type="submit"
            value="Login"
            disabled={isLoginLoading}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
