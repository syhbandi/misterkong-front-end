import { useQuery } from "@tanstack/react-query";
import api from "../../api/api.config";
import Spinner from "../../components/Spinner";

const Page = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["kebijakan-privasi"],
    queryFn: async () => await api.get("article/kebijakan-privasi"),
  });

  return (
    <>
      <header className={`h-[300px] bg-cover bg-no-repeat bg-blue-600`}>
        <div className="h-full w-full backdrop-brightness-[20%] flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-poppins font-bold text-white">
            Kebijakan Privasi
          </h1>
        </div>
      </header>
      <div className="container mx-auto px-6 py-10 max-w-7xl">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        ) : isError ? (
          <h1 className="text-lg text-red-600 text-center font-semibold font-roboto">
            Terjadi Kesalahan
          </h1>
        ) : data?.data ? (
          <div
            dangerouslySetInnerHTML={{ __html: data?.data?.data[0].content }}
            className="ck-content font-roboto break-words text-justify w-full lg:w-2/3 mx-auto"
          />
        ) : null}
      </div>
    </>
  );
};

export default Page;
