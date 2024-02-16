import { create } from "zustand";

export type userType = {
  access_token: string;
  token_type: string;
  expires_in: number;
  nama_user: string;
  email_user: string;
  no_hp: string;
  user_id: number;
};

type UserStoreType = {
  user: userType;
  setUser: (user: any) => void;
};

const useUserStore = create<UserStoreType>()((set) => ({
  user: JSON.parse(localStorage.getItem("MISTERKONG_ADMIN") || "{}"),
  setUser: (user) => set(() => ({ user })),
}));

export default useUserStore;
