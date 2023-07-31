import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

const ErrorPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-5xl font-semibold font-poppins mb-3">
        Upss...
      </h1>
      <p className="font-roboto mb-5">Halaman tidak ditemukan</p>
      <Link to={"/"}>
        <div className="px-5 py-3 bg-kong flex items-center justify-center rounded-md font-poppins gap-3 font-medium">
          <MdKeyboardBackspace />
          <span>Ke beranda</span>
        </div>
      </Link>
    </div>
  );
};

export default ErrorPage;
