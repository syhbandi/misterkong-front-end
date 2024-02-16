import { useStore } from "zustand";
import BreadCrumb from "../../../components/admin/BreadCrumb";
import useUserStore from "../../../states/auth";

const index = () => {
  const { user } = useStore(useUserStore);
  return (
    <div>
      <BreadCrumb
        title="Dashboard"
        breadcrumb={[{ title: "Dashboard", href: "", active: true }]}
      />
      <h1 className="text-3xl font-medium">Selamat datang {user.nama_user}!</h1>
    </div>
  );
};

export default index;
