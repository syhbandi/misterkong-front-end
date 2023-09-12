// import { useParams } from "react-router-dom";
import "../KebijakanPrivasi/style.css";
import misterkong from "./Misterkong";
import { useState } from "react";
import { layanan } from "../../data";

const SyaratKetentuan = () => {
  // const { slug } = useParams();
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <header className="h-[500px] bg-indigo-900" id="head">
        <div className="container h-full mx-auto max-w-7xl px-6 flex items-center justify-center">
          <h1 className="md:text-5xl text-2xl font-semibold font-poppins text-white">
            Syarat & Ketentuan
          </h1>
        </div>
      </header>
      <section className="py-10">
        <div className="container mx-auto max-w-7xl px-6 ck-content">
          <div
            dangerouslySetInnerHTML={{
              __html: showMore ? misterkong : misterkong.slice(0, 3000) + "...",
            }}
            className="ck-content font-roboto break-words"
          />
          <div className="flex justify-center">
            <button
              className="bg-kong rounded-md px-7 py-3 font-poppins font-medium"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Lebih Sedikit" : "Lebih Banyak"}
            </button>
          </div>
          <div className="flex flex-col items-center">
            {layanan.map((layanan) => (
              <div
                key={layanan.id}
                className="border-b border-gray-300 py-4 md:w-[50%] flex items-center"
              >
                <img src={layanan.icon} width={40} height={40} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SyaratKetentuan;
