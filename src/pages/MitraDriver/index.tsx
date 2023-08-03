import hero from "../../assets/hero-mitra-driver.jpeg";
import gabungImg from "../../assets/benefit-mitra.png";
import { GiPayMoney } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiMoneyWithdraw, BiGift } from "react-icons/bi";
import { ReactElement } from "react";
import driverMobil from "../../assets/driver-mobil.jpg";
import driverMotor from "../../assets/driver-motor.png";
import { motion } from "framer-motion";

const gabungList: { id: number; title: string; icon: ReactElement }[] = [
  {
    id: 1,
    title: "Tanpa bagi hasil",
    icon: <GiPayMoney />,
  },
  {
    id: 2,
    title: "Atur jam kerja semaumu",
    icon: <AiOutlineClockCircle />,
  },
  {
    id: 3,
    title: "Cairkan penghasilan kapan saja",
    icon: <BiMoneyWithdraw />,
  },
  {
    id: 4,
    title: "Banyak bonus menarik",
    icon: <BiGift />,
  },
];

const syaratMotor = [
  {
    kategori: "Persyaratan Administrasi",
    body: [
      "WNI",
      "Mampu membaca dan menulis",
      "Memiliki SIM C/D",
      "Minimal berusia 18 tahun",
      "Maksimal berusia 55 tahun",
      "Memiliki STNK aktif",
    ],
  },
  {
    kategori: "Persyaratan Dokumen",
    body: ["KTP", "SIM", "Buku Rekening"],
  },
];
const syaratMobil = [
  {
    kategori: "Persyaratan Administrasi",
    body: [
      "WNI",
      "Mampu membaca dan menulis",
      "Memiliki SIM A/B",
      "Minimal berusia 18 tahun",
      "Maksimal berusia 55 tahun",
      "Memiliki STNK aktif",
    ],
  },
  {
    kategori: "Persyaratan Dokumen",
    body: ["KTP", "SIM", "Buku Rekening"],
  },
];

const section = {
  off: {
    opacity: 0,
  },
  on: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const item = {
  off: {
    opacity: 0,
    y: 100,
  },
  on: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const MitraDriver = () => {
  return (
    <>
      <header
        className="h-screen bg-cover"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="h-full bg-black bg-opacity-70">
          <div className="container mx-auto max-w-7xl px-6 h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="flex items-center">
                <div>
                  <motion.h1
                    variants={item}
                    initial="off"
                    whileInView={"on"}
                    className="text-2xl md:text-6xl font-poppins text-white font-bold mb-10"
                    viewport={{ once: true }}
                  >
                    Jadilah Bagian dari Kami
                  </motion.h1>
                  <motion.a
                    variants={item}
                    initial="off"
                    whileInView={"on"}
                    href=""
                    rel="noreferrer"
                    viewport={{ once: true }}
                  >
                    <span className="px-6 py-3 bg-kong font-roboto text-lg md:text-2xl rounded-md font-semibold">
                      Daftar sekarang
                    </span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* kenapa harus gabung */}
      <motion.section
        variants={section}
        initial="off"
        whileInView="on"
        className="py-10 md:py-20"
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              variants={item}
              className="flex items-center justify-center"
            >
              <img src={gabungImg} alt="" className="w-full md:w-[500px]" />
            </motion.div>
            <div className="flex flex-col justify-center">
              <motion.h1
                variants={item}
                className="font-semibold text-2xl md:text-5xl mb-5 font-poppins"
              >
                Kenapa harus gabung?
              </motion.h1>
              {gabungList.map((list) => (
                <motion.div
                  variants={item}
                  className="flex items-center gap-5 py-3"
                  key={list.id}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                    className="w-12 h-12 rounded-full bg-kong flex items-center justify-center text-2xl"
                  >
                    {list.icon}
                  </motion.div>
                  <div className="font-roboto text-lg font-medium">
                    {list.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      {/* syarat pengemudi motor */}
      <motion.section
        variants={section}
        initial="off"
        whileInView="on"
        className="py-10 md:py-20 bg-kong bg-opacity-20"
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center">
              <motion.h1
                variants={item}
                className="text-2xl md:text-5xl font-semibold font-poppins mb-5"
              >
                Pengemudi Motor
              </motion.h1>
              {syaratMotor.map(({ kategori, body }) => (
                <motion.div variants={item} key={kategori}>
                  <h1 className="text-xl md:text-2xl font-medium font-roboto mb-5">
                    {kategori}
                  </h1>
                  <ul className="list-disc list-inside mb-5 leading-loose">
                    {body.map((list) => (
                      <li key={list}>{list}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={item}
              className="flex flex-col justify-center"
            >
              <img
                src={driverMotor}
                alt="driver motor"
                className="md:w-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* syarat pengemudi mobil */}
      <motion.section
        variants={section}
        initial="off"
        whileInView="on"
        className="py-10 md:py-20"
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              variants={item}
              className="flex items-center justify-center"
            >
              <img
                src={driverMobil}
                alt="driver mobil"
                className="md:w-[500px] rounded-lg"
              />
            </motion.div>
            <div className="flex flex-col justify-center">
              <motion.h1
                variants={item}
                className="text-2xl md:text-5xl font-semibold font-poppins mb-5"
              >
                Pengemudi Mobil
              </motion.h1>
              {syaratMobil.map(({ kategori, body }) => (
                <motion.div variants={item} key={kategori}>
                  <h1 className="text-xl md:text-2xl font-medium font-roboto mb-5">
                    {kategori}
                  </h1>
                  <ul className="list-disc list-inside mb-5 leading-loose">
                    {body.map((list) => (
                      <li key={list}>{list}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default MitraDriver;
