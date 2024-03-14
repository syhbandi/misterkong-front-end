import { motion } from "framer-motion";
import kongFamily from "../../assets/kong-family.jpg";

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

const Tentang = () => {
  return (
    <>
      <header className="h-[500px] bg-blue-950 flex items-center justify-center">
        <motion.h1
          variants={header}
          initial="off"
          whileInView={"on"}
          className="text-3xl md:text-5xl font-semibold text-white font-poppins"
        >
          Sebuah Perjalanan Panjang
        </motion.h1>
      </header>
      <section>
        <div className="container mx-auto max-w-7xl px-6 py-10 md:py-20 font-roboto">
          <div className="w-full lg:w-2/3 mx-auto">
            <p className="indent-8 mb-5 text-justify">
              MisterKong lahir dengan perjalanan yang cukup Panjang. MisterKong
              didirikan oleh Royni Lim atau biasa dipanggil dengan Roy. Roy
              adalah seorang programmer lulusan Manajemen Informatika STIKOM.
              Roy terjun ke dunia IT pada tahun 2003 memulai karirnya sejak
              kuliah, sebagai programmer.
            </p>
            <p className="indent-8 mb-5 text-justify">
              Kecintaannya terhadap dunia IT membuat Roy terus mengembangkan
              konsep pada aplikasi yang telah diciptakannya, Ia mulai beralih
              pada aplikasi Market Place OmniChannel yang terintegrasi dengan
              aplikasi POS, Manajemen Stock, dan Akuntansi. Kemudian di tahun
              2019, Roy mulai membangun aplikasi MisterKong bersama tim, sebuah
              platform yang memiliki misi untuk membantu dan meningkatkan laju
              perekonomian UMKM.
            </p>
            <p className="indent-8 mb-5 text-justify">
              Asal usul nama MisterKong sendiri memiliki filosofi sosok yang
              kuat untuk bisa membantu banyak orang dengan karakter King Kong
              sebagai icon dari MisterKong. Warna kuning yang mendominasi di
              MisterKong menurut kepercayaan Roy sendiri diibaratkan seperti
              warna kuning pada emas yang akan terus bersinar dengan harapan
              bahwa aplikasi MisterKong juga bisa bersinar seperti emas yang
              dikenal dan digunakan oleh seluruh masyarakat.
            </p>
            <p className="indent-8 mb-5 text-justify">
              MisterKong adalah layanan moda transportasi berbasis online yang
              memiliki beberapa jenis layanan, diantaranya KongPos, KongRider,
              KongCar, KongMeal, KongShop, dan KongMart. Di awal lahirnya,
              MisterKong sudah berhasil menghimpun berbagai Mitra Usaha untuk
              terus tumbuh dan berkembang Bersama.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tentang;
