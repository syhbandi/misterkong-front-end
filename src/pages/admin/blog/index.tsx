import { useQuery } from "@tanstack/react-query";
import BreadCrumb from "../../../components/admin/BreadCrumb";
import { GetArtikelsType, getArtikels } from "../../../api/artikel";
import Table from "../../../components/admin/Table";
import artikelCol from "../../../constants/table-columns/artikel";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "zustand";
import useUserStore from "../../../states/auth";
import SearchInput from "../../../components/admin/SearchInput";
import Pagination from "../../../components/admin/Pagination";
import { FiPlus } from "react-icons/fi";

const index = () => {
  const { user } = useStore(useUserStore);
  const [params, setParams] = useState<GetArtikelsType>({
    search: "",
    limit: 0,
    length: 10,
    kategori: "blog",
  });
  const { data, isLoading } = useQuery({
    queryKey: ["artikel", params],
    queryFn: () => getArtikels(params, user),
  });

  return (
    <>
      <BreadCrumb
        title="Blog"
        breadcrumb={[{ title: "Blog", href: "/admin/blog", active: true }]}
      />
      <div className="bg-white rounded-lg p-5">
        <div className="flex items-center gap-3 mb-3">
          <SearchInput
            setState={(search) => setParams((prev) => ({ ...prev, search }))}
          />
          <Link to={"tambah"} className="relative">
            <button className="h-11 flex items-center justify-center px-5 bg-kong rounded-md font-medium hover:bg-opacity-80 gap-2">
              <FiPlus />
              Tambah
            </button>
          </Link>
        </div>
        <Table
          columns={artikelCol}
          data={data?.data || []}
          isLoading={isLoading}
        />
        <div className="mt-3 flex items-center">
          <div className="flex items-center gap-3">
            <span>Menampilkan</span>
            <select
              className="border border-gray-200 bg-white outline-none h-11 rounded-md px-2 focus:border-gray-800"
              value={params.length}
              onChange={(e) =>
                setParams((prev) => ({ ...prev, length: +e.target.value }))
              }
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>dari {data?.jumlah}</span>
          </div>
          <div className="ml-auto">
            <Pagination
              dataCount={data?.jumlah}
              dataPerPage={params.length}
              offset={params.limit}
              setOffset={(offset) =>
                setParams((prev) => ({ ...prev, limit: offset }))
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
