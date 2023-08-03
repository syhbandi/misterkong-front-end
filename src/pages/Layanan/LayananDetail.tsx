import { motion } from "framer-motion";

const img = {
  off: {
    opacity: 0,
    y: 100,
  },
  on: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
  hover: {
    rotate: 360,
    transition: {
      duration: 1,
    },
  },
};

type Layanan = {
  id: number;
  nama: string;
  kategori: string;
  deskripsi: string;
  icon: string;
};
const LayananDetail = ({ layanan }: { layanan: Layanan }) => {
  return (
    <div className="flex items-center gap-3 py-5">
      <motion.img
        variants={img}
        whileHover="hover"
        src={layanan.icon}
        width={50}
        height={50}
      />
      <div>
        <h1 className="text-lg font-roboto font-medium">{layanan.nama}</h1>
        <p className="font-roboto">{layanan.deskripsi}</p>
      </div>
    </div>
  );
};

export default LayananDetail;
