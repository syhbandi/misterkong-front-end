import { useQuery } from "@tanstack/react-query";
import { getSubKategori } from "../../api/artikel";
import { useStore } from "zustand";
import useUserStore from "../../states/auth";
import Select from "./Select";

type PropsType = {
  kategoriId: string;
};
const SelectSubKategori = (props: PropsType) => {
  const { user } = useStore(useUserStore);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sub_kategori", props.kategoriId],
    queryFn: () => getSubKategori(props.kategoriId, user),
  });

  if (isError) return <>Ada error </>;
  return (
    <Select
      label="Kategori"
      name="sub_kategori_id"
      options={data?.data?.map((sub: any) => ({
        value: sub?.id,
        label: sub?.nama,
      }))}
      isLoading={isLoading}
    />
  );
};

export default SelectSubKategori;
