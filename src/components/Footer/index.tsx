import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import appStore from "../../assets/app-store.png";
import playStore from "../../assets/google-play.png";

const FOoter = () => {
  return (
    <footer className="py-10 bg-blue-600 bg-opacity-10 font-poppins ">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pb-5 border-b border-gray-400">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-semibold">Perusahaan</h1>
            <Link to={"tentang-kami"}>
              <span className="">Tentang kami</span>
            </Link>
            <Link to={"produk"}>
              <span className="">Produk</span>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-semibold">Kemitraan</h1>
            <Link to={"mitra-driver"}>
              <span className="">Mitra Driver</span>
            </Link>
            <Link to={"mitra-usaha"}>
              <span className="">Mitra Usaha</span>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-semibold">Pusat Bantuan</h1>
            <Link to={"syarat-ketentuan"}>
              <span className="">syarat & ketentuan</span>
            </Link>
            <Link to={"kebijakan-privasi"}>
              <span className="">Kebijakan Privasi</span>
            </Link>
            <Link to={"bantuan"}>
              <span className="">Bantuan</span>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-semibold">Tetap terhubung</h1>
            <div className="flex items-center  gap-5">
              <a
                href="https://www.facebook.com/misterkongpos#intend"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/misterkongpos/#intend"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a href="" target="_blank">
                <FaYoutube />
              </a>
              <a href="https://twitter.com/MisterKong6#intend" target="_blank">
                <FaTwitter />
              </a>
            </div>
            <h1 className="text-lg font-semibold">Unduh</h1>
            <div className="flex items-center gap-3">
              <Link to={""}>
                <img
                  src={playStore}
                  alt="google play store"
                  className="max-h-[30px]"
                />
              </Link>
              <Link to={""}>
                <img
                  src={appStore}
                  alt="apple store"
                  className="max-h-[30px]"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          &copy;{new Date().getFullYear()}{" "}
          <Link to={"/"} className="font-medium">
            Misterkong.com
          </Link>{" "}
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FOoter;
