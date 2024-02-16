import { Link, Navigate, useNavigate } from "react-router-dom";
import { logoDark } from "../../assets";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getUser } from "../../api/auth";
import { MdErrorOutline } from "react-icons/md";
import { useStore } from "zustand";
import useUserStore from "../../states/auth";

const Login = () => {
  const { user, setUser } = useStore(useUserStore);
  const navigate = useNavigate();

  if (user.access_token) return <Navigate to={"/admin"} />;

  const [formData, setFormData] = useState({
    no_hp: "",
    passwd: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((current) => ({
      ...current,
      [event.target.id]: event.target.value,
    }));
  };

  const login = useMutation({
    mutationFn: getUser,
    onSuccess: (data) => {
      localStorage.setItem("MISTERKONG_ADMIN", JSON.stringify(data));
      setUser(data);
      navigate("/admin");
    },
  });

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-5 flex-col">
      <img
        src={logoDark}
        width={150}
        className="object-contain mb-10"
        alt="logo misterkong"
        loading="lazy"
      />
      <div className="rounded-md bg-white shadow-lg p-10 w-full md:w-96">
        <h1 className="text-3xl font-semibold font-poppins text-center mb-5">
          Login
        </h1>
        {login.isError && (
          <div className="font-poppins flex items-center gap-2 border-red-300 bg-red-100 text-red-500 p-4 rounded-md mb-3">
            <MdErrorOutline />
            <p>No. Hp atau password salah</p>
          </div>
        )}
        <form onSubmit={onLogin}>
          <div className="flex flex-col gap-1 mb-5 font-poppins">
            <label htmlFor="no_hp" className="text-gray-500 font-medium">
              No. hp
            </label>
            <input
              type="text"
              id="no_hp"
              name="no_hp"
              className="bg-white rounded-md p-2 outline-none border border-gray-400 focus:ring-1 focus:ring-gray-800"
              value={formData.no_hp}
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col gap-1 font-poppins mb-5">
            <label htmlFor="passwd" className="text-gray-500 font-medium">
              Password
            </label>
            <input
              type="password"
              id="passwd"
              name="passwd"
              className="bg-white rounded-md p-2 outline-none border border-gray-400 focus:ring-1 focus:ring-gray-800"
              value={formData.passwd}
              onChange={onChange}
            />
          </div>

          <div className="mb-5 text-sm font-medium font-poppins text-gray-500 text-right">
            <Link to={""}>Lupa Password</Link>
          </div>

          <button
            className="bg-kong py-3 font-poppins w-full rounded-md font-semibold text-gray-800 hover:bg-opacity-80 disabled:opacity-50"
            disabled={login.isLoading}
          >
            {login.isLoading ? "Proses" : "Login"}
          </button>
        </form>
      </div>

      <div className="font-poppins mt-5 text-gray-800">
        &copy;{new Date().getFullYear()} Misterkong All Rights Reserved.
      </div>
    </div>
  );
};

export default Login;
