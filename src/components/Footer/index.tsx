import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import appStore from "../../assets/app-store.png";
import playStore from "../../assets/google-play.png";

const socialLink = [
  {
    link: "https://www.facebook.com/misterkongpos",
    icon: <FaFacebook />,
  },
  {
    link: "https://www.instagram.com/misterkongpos",
    icon: <FaInstagram />,
  },
  {
    link: "https://twitter.com/MisterKong6",
    icon: <FaTwitter />,
  },
];

const FOoter = () => {
  return (
    <footer className="py-10 bg-kong bg-opacity-10 font-poppins">
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
            <div className="flex items-center gap-5">
              {socialLink.map(({ link, icon }, index) => (
                <a href={link} target="_blank" key={index}>
                  {icon}
                </a>
              ))}
            </div>
            <h1 className="text-lg font-semibold">Unduh</h1>
            <div className="flex items-center gap-3">
              <a
                href="https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.kong.market"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={playStore}
                  alt="google play store"
                  className="max-h-[30px]"
                />
              </a>
              <a
                href="https://apps.apple.com/id/app/misterkong/id1611887662"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={appStore}
                  alt="apple store"
                  className="max-h-[30px]"
                />
              </a>
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
