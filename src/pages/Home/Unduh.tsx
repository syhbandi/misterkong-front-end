import unduhImg from "../../assets/download-kong.jpeg";
import playStore from "../../assets/google-play.png";
import appStore from "../../assets/app-store.png";
const Unduh = () => {
  return (
    <section
      className=" bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${unduhImg})` }}
      id="unduh"
    >
      <div className="w-full h-full backdrop-blur-md backdrop-brightness-50">
        <div className="container mx-auto px-6 max-w-7xl py-10 md:py-20">
          <h1 className="text-2xl md:text-5xl font-semibold font-poppins mb-10 text-center text-white">
            Unduh Sekarang
          </h1>
          <div className="flex items-center gap-5 justify-center">
            <a
              href="https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.kong.market"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={playStore}
                alt="download di playstore"
                className="max-h-[70px]"
              />
            </a>
            <a
              href="https://apps.apple.com/id/app/misterkong/id1611887662"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={appStore}
                alt="download di appstore"
                className="max-h-[70px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unduh;
