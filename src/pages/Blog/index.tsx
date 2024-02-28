import { useQuery } from "@tanstack/react-query";
import { FiSearch } from "react-icons/fi";
import api from "../../api/api.config";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Spinner from "../../components/Spinner";
import { default_image } from "../../assets";

const Page = () => {
  const [search, setSearch] = useSearchParams();
  const [offset, setOffset] = useState(0);
  const query = useQuery({
    queryKey: ["blog", offset, search.get("cari")],
    queryFn: async () =>
      await api.get("article/all/blog", {
        params: {
          search: search.get("cari"),
          limit: offset,
          length: "10",
        },
      }),
  });

  const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (!formData.get("cari-blog")) {
      setSearch("");
    } else {
      setSearch(`cari=${formData.get("cari-blog")}`);
    }
  };

  return (
    <>
      <header className="h-[400px] bg-blue-600">
        <div className="h-full w-full backdrop-brightness-[20%] flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-10">
            Blog
          </h1>
          <div className="container mx-auto max-w-7xl px-6">
            <form onSubmit={handleSearch} autoComplete="off">
              <div className="w-full lg:w-1/2 mx-auto flex items-center bg-gray-100 rounded-lg h-12 overflow-hidden">
                <input
                  type="search"
                  name="cari-blog"
                  className="outline-none h-full bg-transparent px-3 font-roboto flex-1"
                  placeholder="Cari di blog"
                />
                <button className="h-full bg-kong outline-none flex items-center justify-center px-5 text-xl hover:brightness-90">
                  <FiSearch />
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-6 max-w-7xl py-10">
        {query.isLoading && (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        )}
        {query.isError && (
          <div className="flex items-center justify-center font-semibold text-red-500 text-lg">
            Terjadi kesalahan saat memuat data
          </div>
        )}
        {!query.data?.data.data.length && (
          <div className="flex items-center justify-center font-semibold font-roboto">
            Tidak menemukan data{" "}
            {search.get("cari") ? "dengan keyword: " + search.get("cari") : ""}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {query.data?.data.data?.map((blog: any) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

type PropsType = {
  blog: {
    content: string;
    date_add: string;
    date_modif: string;
    header_image: string;
    id: string;
    judul: string;
    kategori: string;
    kategori_id: string;
    slug: string;
    sub_kategori: string;
    subkategori_id: string;
  };
};
const BlogCard = ({ blog }: PropsType) => {
  return (
    <Link to={`/blog/${blog.slug}`}>
      <div className="h-[350px] flex flex-col">
        <img
          src={blog.header_image || default_image}
          className="rounded-2xl w-full h-[200px] object-cover"
        />
        <div className="mt-5 font-roboto flex flex-col flex-1">
          <div className="text-kong text-sm mb-3">{blog.sub_kategori}</div>
          <p className="font-medium text-xl break-words overflow-hidden text-ellipsis line-clamp-2">
            {blog.judul}
          </p>
          <div className="mt-auto text-gray-400">
            {new Intl.DateTimeFormat("id", { dateStyle: "long" }).format(
              new Date(blog.date_add)
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Page;
