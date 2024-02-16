import { userType } from "../states/auth";
import api from "./api.config";

export const getUser = async ({
  no_hp,
  passwd,
}: {
  no_hp: string;
  passwd: string;
}) => {
  const { data } = await api.post("login", { no_hp, passwd });
  return data;
};

export const refreshToken = async ({ user }: { user: userType }) => {
  const { data } = await api.post(
    "refresh-token",
    {},
    {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    }
  );

  return data;
};
