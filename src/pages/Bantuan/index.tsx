import { Outlet } from "react-router-dom";
import hero from "../../assets/hero-bantuan.jpg";
import Kategori from "./Kategori";

const Page = () => {
  return (
    <>
      <header
        className={`h-[500px] bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="h-full w-full backdrop-brightness-[20%] flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-poppins font-bold text-white">
            Pusat Bantuan
          </h1>
        </div>
      </header>
      <Outlet />
      <Kategori />
    </>
  );
};

export default Page;
