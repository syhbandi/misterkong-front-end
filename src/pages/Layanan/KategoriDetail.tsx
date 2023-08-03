import { layanan } from "../../data";
import LayananDetail from "./LayananDetail";
import makanan from "../../assets/kongmeal-layanan.png";
import transport from "../../assets/kongride-layanan.png";

const KategoriDetail = ({ kategori }: { kategori: string }) => {
  return (
    <section
      className={`py-10 ${
        kategori === "Pesan Makan & Belanjain" ? "bg-red-100" : ""
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl md:text-5xl font-semibold font-poppins mb-5">
              {kategori}
            </h1>
            {layanan
              .filter((l) => l.kategori === kategori)
              .map((l) => (
                <LayananDetail layanan={l} key={l.id} />
              ))}
          </div>
          <div
            className={`flex justify-center ${
              kategori === "Pesan Makan & Belanjain" ? "order-first" : ""
            }`}
          >
            <img
              src={kategori === "Pesan Makan & Belanjain" ? makanan : transport}
              alt=""
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KategoriDetail;
