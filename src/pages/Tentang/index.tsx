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
      <header
        className="h-[500px] bg-cover"
        style={{ backgroundImage: `url(${kongFamily})` }}
      >
        <div className="bg-black bg-opacity-75 w-full h-full">
          <div className="container mx-auto max-w-7xl px-6 flex items-center justify-center h-full">
            <motion.h1
              variants={header}
              initial="off"
              whileInView={"on"}
              className="text-3xl md:text-5xl font-semibold text-white font-poppins"
            >
              Sebuah Perjalanan Panjang
            </motion.h1>
          </div>
        </div>
      </header>
      <section>
        <div className="container mx-auto max-w-7xl px-6 py-10 md:py-20 font-roboto">
          <p className="indent-8 mb-5 text-justify">
            MisterKong lahir dengan perjalanan yang cukup Panjang. MisterKong
            didirikan oleh Royni Lim atau biasa dipanggil dengan Roy. Roy adalah
            seorang programmer lulusan Manajemen Informatika STIKOM. Roy terjun
            ke dunia IT pada tahun 2003 memulai karirnya sejak kuliah, Roy
            bekerja di Start Build Jr Software House dengan posisi sebagai
            programmer. 2007 Roy lulus kuliah dan hendak berhenti dari pekerjaan
            sebelumnya memutuskan kerja dengan perusahaan lain tetapi pihak
            perusahaan tidak menerima.
          </p>
          <p className="indent-8 mb-5 text-justify">
            Tahun 2008, Roy bangkit dan memberanikan diri untuk membangun sebuah
            perusahaan IT SOLID TECH. 2009 Roy dan tim membuat sebuah produk
            SOLID Accounting, sebuah aplikasi berbasis Manajemen Inventori,
            Penjualan dan Akuntansi berbasis desktop. SOLID Accounting terus
            berkembang dan sempat berencana untuk mengkolaborasikan SOLID
            Accounting dengan sebuah e-commerce, namun hal tersebut gagal
            dikarenakan kurangnya jumlah personel.
          </p>
          <p className="indent-8 mb-5 text-justify">
            Kecintaannya terhadap dunia IT membuat Roy terus mengembangkan
            konsep pada aplikasi yang telah diciptakannya, Ia mulai beralih pada
            aplikasi Market Place OmniChannel yang terintegrasi dengan aplikasi
            POS, Manajemen Stock, dan Akuntansi. Kemudian di tahun 2019, Roy
            dengan bangga memperkenalkan MisterKong, sebuah platform yang
            memiliki misi untuk membantu dan meningkatkan laju perekonomian
            masyarakat, terutama di daerah NTB.
          </p>
          <p className="indent-8 mb-5 text-justify">
            Asal usul nama MisterKong sendiri memiliki filosofi sosok yang kuat
            untuk bisa membantu banyak orang dengan hewan King Kong sebagai icon
            dari MisterKong. Warna kuning yang mendominasi di MisterKong menurut
            kepercayaan Roy sendiri diibaratkan seperti warna kuning pada emas
            yang akan terus bersinar dengan harapan bahwa aplikasi MisterKong
            juga bisa bersinar seperti emas yang dikenal dan digunakan oleh
            seluruh masyarakat.
          </p>
          <p className="indent-8 mb-5 text-justify">
            MisterKong adalah layanan moda transportasi berbasis online yang
            memiliki beberapa jenis layanan, diantaranya KongPos, KongRider,
            KongCar, KongMeal, KongShop, dan KongMart. Di awal lahirnya,
            MisterKong sudah berhasil menghimpun berbagai Mitra Usaha untuk
            terus tumbuh dan berkembang Bersama.
          </p>
        </div>
      </section>
    </>
  );
};

export default Tentang;
