import { AxiosProgressEvent } from "axios";
import { userType } from "../states/auth";
import api from "./api.config";

export type GetArtikelsType = {
  search: string;
  limit: number | any;
  length: number | any;
  kategori?: string;
};

export const getArtikels = async (params: GetArtikelsType, user: userType) => {
  const { data } = await api.get("article/all", {
    params,
    headers: {
      Authorization: `Bearer ${user.access_token}`,
    },
  });
  return data;
};

export const getArtikel = async (id: string, user: userType) => {
  const { data } = await api.get("article", {
    params: { key: id },
    headers: {
      Authorization: `Bearer ${user.access_token}`,
    },
  });
  return data;
};

export type CreateArtikelType = {
  id?: string;
  judul: string;
  content: string;
  header_image: string;
  sub_kategori_id: string;
};
export const createArtikel = async ({
  body,
  user,
}: {
  body: CreateArtikelType;
  user: userType;
}) => {
  const { data } = await api.post("article", body, {
    headers: {
      Authorization: `Bearer ${user.access_token}`,
    },
  });
  return data;
};

export const editArtikel = async ({
  body,
  user,
}: {
  body: CreateArtikelType;
  user: userType;
}) => {
  const { data } = await api.put("article", body, {
    headers: {
      Authorization: `Bearer ${user.access_token}`,
    },
  });
  return data;
};

export const uploadGambar = async ({
  image,
  user,
  progressFunc,
}: {
  image: File;
  user: userType;
  progressFunc?: (event: AxiosProgressEvent) => void;
}) => {
  const { data } = await api.post(
    "article/uploads",
    { image },
    {
      headers: {
        Authorization: "Bearer " + user.access_token,
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        progressFunc && progressFunc(progressEvent);
      },
    }
  );
  return data;
};

export const getSubKategori = async (kategoriId: string, user: userType) => {
  const { data } = await api.get(`article/subkategori-list/${kategoriId}`, {
    headers: {
      Authorization: `Bearer ${user.access_token}`,
    },
  });
  return data;
};

export const getSlug = async (slug: string, user: userType) => {
  const { data } = await api.get("article/slug", {
    params: {
      slug,
    },
    headers: {
      Authorization: `Bearer ${user.access_token}`,
    },
  });
  return data;
};

export const deleteArtikel = async ({
  id,
  user,
}: {
  id: string | number;
  user: userType;
}) => {
  const { data } = await api.delete("article", {
    params: { key: id },
    headers: {
      Authorization: "Bearer " + user.access_token,
    },
  });
  return data;
};

// ---------------------------------------front office ---------------------------------------------------
export const getFrontArticles = async (
  params: GetArtikelsType,
  kategori: string,
  subId?: string
) => {
  const { data } = await api.get(`article/${kategori}/${subId}`, {
    params,
  });
  return data;
};

export const getFrontArticle = async (slug: string) => {
  const { data } = await api.get(`article/dt/${slug}`);
  return data;
};
