import Kategori from "./Kategori";
import { Outlet } from "react-router-dom";

const Page = () => {
  return (
    <>
      <header className={`h-[300px] bg-cover bg-no-repeat bg-blue-600`}>
        <div className="h-full w-full backdrop-brightness-[20%] flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-poppins font-bold text-white">
            Syarat dan Ketentuan
          </h1>
        </div>
      </header>
      <Outlet />
      <Kategori />
    </>
  );
};

export default Page;
