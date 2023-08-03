import hero from "../../assets/hero-layanan.jpg";
import { layanan } from "../../data";
import KategoriDetail from "./KategoriDetail";
import { motion } from "framer-motion";

const header = {
  off: {
    y: -50,
    opacity: 0,
  },
  on: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Layanan = () => {
  const kategoris = [...new Set(layanan.map((l) => l.kategori))];
  return (
    <>
      <header
        className="h-screen bg-cover"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="bg-black bg-opacity-75 w-full h-full">
          <div className="container mx-auto max-w-7xl px-6 h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 h-full">
              <div className="flex items-center">
                <motion.h1
                  variants={header}
                  initial="off"
                  whileInView="on"
                  className="text-2xl md:text-5xl font-poppins font-bold text-white"
                >
                  Kami membuat layanan untuk memudahkan harimu
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {kategoris.map((kategori) => (
        <KategoriDetail kategori={kategori} key={kategori} />
      ))}
    </>
  );
};

export default Layanan;
